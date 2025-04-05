"use client";
import {useEffect, useRef, useState} from "react";
import {JetBrains_Mono} from "next/font/google";
import styles from './AnimatedTitle.module.css';

// Load JetBrains Mono font
export const jetBrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    weight: ['400', '700'],
    display: 'swap',
});

const AnimatedTitle = ({text, triggerOnLoad = true}) => {
    const [words, setWords] = useState([]);
    const hasAnimatedRef = useRef(false);

    // Split text into words and letters
    useEffect(() => {
        const sentence = text.split(' ');
        const wordsArray = sentence.map(word => {
            return word.split('').map(letter => ({letter, original: letter}));
        });
        setWords(wordsArray);
    }, [text]);

    // Handle page load animation
    useEffect(() => {
        if (triggerOnLoad && words.length > 0 && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            words.forEach((word, wordIndex) => {
                animateWord(wordIndex);
            });
        }
    }, [words, triggerOnLoad]);

    const animateWord = (wordIndex) => {
        const word = words[wordIndex];
        word.forEach((_, letterIndex) => {
            setTimeout(() => {
                animateLetter(wordIndex, letterIndex);
            }, letterIndex * 100);
        });
    };

    const animateLetter = (wordIndex, letterIndex) => {
        const alpha = ['!', '#', '$', '0', '1', '2', '3', '4', '5', '6', 'A', 'G', 'T', 'H', 'Y', 'Z', 'X', 'W', 'O', 'K', 'Q', 'S'];

        setWords(prevWords => {
            const newWords = JSON.parse(JSON.stringify(prevWords));
            newWords[wordIndex][letterIndex].changing = true;
            return newWords;
        });

        let i = 0;
        const intervalId = setInterval(() => {
            const randomLetter = alpha[Math.floor(Math.random() * alpha.length)];

            setWords(prevWords => {
                const newWords = JSON.parse(JSON.stringify(prevWords));
                newWords[wordIndex][letterIndex].letter = randomLetter;
                return newWords;
            });

            if (i === 5) {
                clearInterval(intervalId);
                setWords(prevWords => {
                    const newWords = JSON.parse(JSON.stringify(prevWords));
                    newWords[wordIndex][letterIndex].letter = newWords[wordIndex][letterIndex].original;
                    newWords[wordIndex][letterIndex].changing = false;
                    return newWords;
                });
            }
            i++;
        }, 40);
    };

    return (
        <div className={`${styles.titleContainer} ${jetBrainsMono.className}`}>
            <h1>
                {words.map((word, wordIndex) => (
                    <span
                        key={`word-${wordIndex}`}
                        className={styles.word}
                        onMouseEnter={() => animateWord(wordIndex)}
                    >
                                    {word.map((letter, letterIndex) => (
                                        <span
                                            key={`letter-${letterIndex}`}
                                            className={`${styles.letter} ${letter.changing ? styles.changing : ''}`}
                                        >
                                            {letter.letter}
                                        </span>
                                    ))}
                        {wordIndex < words.length - 1 ? ' ' : ''}
                                </span>
                ))}
            </h1>
        </div>
    );
};

export default AnimatedTitle;