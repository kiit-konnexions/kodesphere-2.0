export const GeneralMessage = (team_name, team_id) => {
    return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <style>
        @import url("https://fonts.googleapis.com/css2?family=Anton&family=Big+Shoulders+Display:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          background: rgb(252, 247, 255);
        }
        .container {
          max-width: 560px;
          background: white;
          font-family: "Roboto", sans-serif;
          margin: 0 auto;
        }
        img {
          width: 100%;
          display: block;
        }
        footer {
          padding: 15px 0;
          background-size: cover;
          background-image: url(https://images.pexels.com/videos/3045163/free-video-3045163.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500);
        }
  
        .icon {
          height: 30px;
          width: 30px;
          object-fit: contain;
          display: inline;
        }
  
        .socials {
          width: fit-content;
          margin: 0 auto;
        }
  
        a {
          display: inline;
          text-decoration: none;
        }
  
        .icon-wrapper {
          margin-right: 10px;
        }
  
        .messageBox {
          padding: 20px 8px;
          padding-bottom: 30px;
        }
  
        .success-icon {
          width: 50px;
          height: 50px;
          object-fit: contain;
          display: block;
          margin: 0 auto;
        }
  
        .button {
          background: #bcdde8;
          border: none;
          padding: 10px 15px;
          border-radius: 5px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          color: #000;
          margin: 0 auto;
          width: fit-content;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <img
          style="padding-top: 20px"
          src="https://events.konnexions.dev/mail-images/emailheader.png"
          alt=""
        />
        <div class="messageBox">
          <h1 style="font-size: 20px; font-weight: 600; margin-top: 20px">
            Greetings ${team_name}!
          </h1>
          <p style="font-weight: 400; line-height: 1.9; margin-top: 10px">
            You have successfully secured a spot. This email serves as
            confirmation of ${team_name}'s registration (Team ID: ${team_id}) for
            Kodessphere 2.0 scheduled on March 31, 2025. We are delighted to have
            your team onboard and anticipate a fruitful and enjoyable event.
          </p>
  
          <a
            style="margin-top: 20px; display: block"
            href="http://events.konnexions.dev/digital-id/${team_id}"
          >
            Get you virtual ID card here.
          </a>
  
          <a
            style="display: block; max-width: 450px; margin: 0 auto"
            href="http://events.konnexions.dev/digital-id/${team_id}"
          >
            <img
              style="padding-top: 20px"
              src="https://events.konnexions.dev/mail-images/teamIDBanner.png"
              alt=""
            />
          </a>
  
          <p style="font-weight: 400; line-height: 1.9; margin-top: 20px">
            Kindly retain the Team ID (${team_id}) for all future correspondence
            concerning the event. Let's make this event one to remember!
          </p>
  
          <p style="margin-top: 29px; font-weight: 400">
            Have a great day ahead!
          </p>
          <p style="margin-top: 10px; font-weight: 400">Team Konnexions</p>
        </div>
      </div>
    </body>
  </html>
  `;
  };