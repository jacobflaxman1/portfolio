import anime from "animejs";
import $ from "jquery";
import store from "./store";

const generateNavBar = () => {
  return `
  <div id = 'logo-container'> 
    <div class = 'navLinks' id = 'logo' > JF </div>
  </div>
  
    <nav class = 'nav-container'>
        <a class = 'navLinks' href = '#about-me-container'> About</a>
        <a class = 'navLinks' href = '#project-container'> Work  </a>
    </nav>
  `;
};

const generateHeader = function () {
  return `
    <div id = 'header-container'>
      <header>
        <h1 id = 'name'>Jacob Flaxman</h1>
      </header>
      <div id = 'about-me-div'>
          <p class = 'landing-text' >  Full Stack Developer, <br /> Engineer, <br /> And Change Maker </p>
      </div> 
    </div> 
  
  `;
};

const generateAboutMe = function () {
  return `
  <div id = 'about-me-container'>
    <body>
      <div id = 'about-me-div'>
        <h2 class = 'sectionHeader' id = 'about-header'> About Me </h2>
        <img id = 'headshot' src = 'https://i.imgur.com/HugwxF3.jpg'/>
        <p class = 'about-body'>
          I am a fullstack developer,  musician,  and green belt in lean & six sigma.
          I am graduate of Thinkful's Engineering Immersion course, however my education
          began at the University of San Diego studying Industrial and Systems Engineering.
          I have experience with data analytics as well as manufacturing processes.
          I have worked with many teams of engineers and I am excited to join your team. Engineering has
          always been my passion and bringing change to my community through technology is my goal.
          <br> <br>
          Outside of work, I am an avid and self-taught musician who can play anything from the
          trumpet to the synthesizer. I strive to learn and grow my abilities as an engineer and
          as a person everyday.
        </p>      
      </div> 
    </body>
</div> 
  
  `;
};

const generateProjects = function () {
  return `
  <main>
  <h2 class = 'mywork' > My Work </h2>

    <div id = 'project-container'> 
        <div class = 'project' id = 'project-one'>
            <h3 class = 'project-header'>Project Blackburn </h3>
            <img id = 'quiz' src = 'https://i.imgur.com/rGbej6T.png' alt = 'quiz screenshot'>
            <p class = 'project-description'>
                In this project, alongside a team of 3 other software developers, I created 
                a typing application. The application consists of a competetive game that 
                challenges players to type words that randomly appear on the screen. The app tracks
                user data and displays it for users to see.
            </p>
            <div class = 'technologies'>
                <i class="fab fa-html5 font-awesome tech-padding"></i>
                <i class="fab fa-js font-awesome tech-padding"></i>
                <i class="fab fa-css3-alt font-awesome tech-padding"></i>
                <svg height="32" viewBox="0 0 25.6 25.6" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#fff"><path d="m18.983 18.636c.163-1.357.114-1.555 1.124-1.336l.257.023c.777.035 1.793-.125 2.4-.402 1.285-.596 2.047-1.592.78-1.33-2.89.596-3.1-.383-3.1-.383 3.053-4.53 4.33-10.28 3.227-11.687-3.004-3.84-8.205-2.024-8.292-1.976l-.028.005c-.57-.12-1.2-.19-1.93-.2-1.308-.02-2.3.343-3.054.914 0 0-9.277-3.822-8.846 4.807.092 1.836 2.63 13.9 5.66 10.25 1.109-1.334 2.179-2.461 2.179-2.461.53.353 1.167.533 1.834.468l.052-.044a2.01 2.01 0 0 0 .021.518c-.78.872-.55 1.025-2.11 1.346-1.578.325-.65.904-.046 1.056.734.184 2.432.444 3.58-1.162l-.046.183c.306.245.285 1.76.33 2.842s.116 2.093.337 2.688.48 2.13 2.53 1.7c1.713-.367 3.023-.896 3.143-5.81" fill="#000" stroke="#000" stroke-width="2.149"/><path d="m23.535 15.6c-2.89.596-3.1-.383-3.1-.383 3.053-4.53 4.33-10.28 3.228-11.687-3.004-3.84-8.205-2.023-8.292-1.976l-.028.005a10.31 10.31 0 0 0 -1.929-.201c-1.308-.02-2.3.343-3.054.914 0 0-9.278-3.822-8.846 4.807.092 1.836 2.63 13.9 5.66 10.25 1.116-1.342 2.186-2.469 2.186-2.469.53.353 1.167.533 1.834.468l.052-.044a2.02 2.02 0 0 0 .021.518c-.78.872-.55 1.025-2.11 1.346-1.578.325-.65.904-.046 1.056.734.184 2.432.444 3.58-1.162l-.046.183c.306.245.52 1.593.484 2.815s-.06 2.06.18 2.716.48 2.13 2.53 1.7c1.713-.367 2.6-1.32 2.725-2.906.088-1.128.286-.962.3-1.97l.16-.478c.183-1.53.03-2.023 1.085-1.793l.257.023c.777.035 1.794-.125 2.39-.402 1.285-.596 2.047-1.592.78-1.33z" fill="#336791" stroke="none"/><g stroke-width=".716"><g stroke-linecap="round"><path d="m12.814 16.467c-.08 2.846.02 5.712.298 6.4s.875 2.05 2.926 1.612c1.713-.367 2.337-1.078 2.607-2.647l.633-5.017m-8.922-14.615s-9.284-3.796-8.852 4.833c.092 1.836 2.63 13.9 5.66 10.25 1.106-1.333 2.106-2.376 2.106-2.376m6.1-13.4c-.32.1 5.164-2.005 8.282 1.978 1.1 1.407-.175 7.157-3.228 11.687" stroke-linejoin="round"/><path d="m20.425 15.17s.2.98 3.1.382c1.267-.262.504.734-.78 1.33-1.054.49-3.418.615-3.457-.06-.1-1.745 1.244-1.215 1.147-1.652-.088-.394-.69-.78-1.086-1.744-.347-.84-4.76-7.29 1.224-6.333.22-.045-1.56-5.7-7.16-5.782s-5.423 6.885-5.423 6.885" stroke-linejoin="bevel"/></g><g stroke-linejoin="round"><path d="m11.247 15.768c-.78.872-.55 1.025-2.11 1.346-1.578.325-.65.904-.046 1.056.734.184 2.432.444 3.58-1.163.35-.49-.002-1.27-.482-1.468-.232-.096-.542-.216-.94.23z"/><path d="m11.196 15.753c-.08-.513.168-1.122.433-1.836.398-1.07 1.316-2.14.582-5.537-.547-2.53-4.22-.527-4.22-.184s.166 1.74-.06 3.365c-.297 2.122 1.35 3.916 3.246 3.733" stroke-linecap="round"/></g></g><g fill="#fff"><path d="m10.322 8.145c-.017.117.215.43.516.472s.558-.202.575-.32-.215-.246-.516-.288-.56.02-.575.136z" stroke-width=".239"/><path d="m19.486 7.906c.016.117-.215.43-.516.472s-.56-.202-.575-.32.215-.246.516-.288.56.02.575.136z" stroke-width=".119"/></g><path d="m20.562 7.095c.05.92-.198 1.545-.23 2.524-.046 1.422.678 3.05-.413 4.68" stroke-linecap="round" stroke-linejoin="round" stroke-width=".716"/></g></svg>
            </div>
            <div class = 'project-buttons'> 
              <a href = 'https://project-blackburn-client.vercel.app/' target = '_blank' class = 'view-button' id = 'view-quiz-code'> View Project</a>
              <a href = 'https://github.com/thinkful-ei-narwhal/project-blackburn-client' target = '_blank' class = 'view-button' id = 'view-project'> View Code </a>
            </div>
        </div>

        <div class = 'project' id = 'project-two'>
          <h3 class = 'project-header'> Potluck </h3>
          <img id = 'quiz' src = 'https://i.imgur.com/IQzXKvA.png' alt = 'quiz screenshot'>
          <p class = 'project-description'>
              In order to help people better organize their parties,
              I created Potluck. A social media platform that allows users
              to create events and invite people. The key feature is the ability
              to track whose brining what! 
          </p>
          <div class = 'technologies'>
              <i class="fab fa-html5 font-awesome tech-padding"></i>
              <i class="fab fa-js font-awesome tech-padding"></i>
              <i class="fab fa-css3-alt font-awesome tech-padding"></i>
              <svg height="32" viewBox="0 0 25.6 25.6" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#fff"><path d="m18.983 18.636c.163-1.357.114-1.555 1.124-1.336l.257.023c.777.035 1.793-.125 2.4-.402 1.285-.596 2.047-1.592.78-1.33-2.89.596-3.1-.383-3.1-.383 3.053-4.53 4.33-10.28 3.227-11.687-3.004-3.84-8.205-2.024-8.292-1.976l-.028.005c-.57-.12-1.2-.19-1.93-.2-1.308-.02-2.3.343-3.054.914 0 0-9.277-3.822-8.846 4.807.092 1.836 2.63 13.9 5.66 10.25 1.109-1.334 2.179-2.461 2.179-2.461.53.353 1.167.533 1.834.468l.052-.044a2.01 2.01 0 0 0 .021.518c-.78.872-.55 1.025-2.11 1.346-1.578.325-.65.904-.046 1.056.734.184 2.432.444 3.58-1.162l-.046.183c.306.245.285 1.76.33 2.842s.116 2.093.337 2.688.48 2.13 2.53 1.7c1.713-.367 3.023-.896 3.143-5.81" fill="#000" stroke="#000" stroke-width="2.149"/><path d="m23.535 15.6c-2.89.596-3.1-.383-3.1-.383 3.053-4.53 4.33-10.28 3.228-11.687-3.004-3.84-8.205-2.023-8.292-1.976l-.028.005a10.31 10.31 0 0 0 -1.929-.201c-1.308-.02-2.3.343-3.054.914 0 0-9.278-3.822-8.846 4.807.092 1.836 2.63 13.9 5.66 10.25 1.116-1.342 2.186-2.469 2.186-2.469.53.353 1.167.533 1.834.468l.052-.044a2.02 2.02 0 0 0 .021.518c-.78.872-.55 1.025-2.11 1.346-1.578.325-.65.904-.046 1.056.734.184 2.432.444 3.58-1.162l-.046.183c.306.245.52 1.593.484 2.815s-.06 2.06.18 2.716.48 2.13 2.53 1.7c1.713-.367 2.6-1.32 2.725-2.906.088-1.128.286-.962.3-1.97l.16-.478c.183-1.53.03-2.023 1.085-1.793l.257.023c.777.035 1.794-.125 2.39-.402 1.285-.596 2.047-1.592.78-1.33z" fill="#336791" stroke="none"/><g stroke-width=".716"><g stroke-linecap="round"><path d="m12.814 16.467c-.08 2.846.02 5.712.298 6.4s.875 2.05 2.926 1.612c1.713-.367 2.337-1.078 2.607-2.647l.633-5.017m-8.922-14.615s-9.284-3.796-8.852 4.833c.092 1.836 2.63 13.9 5.66 10.25 1.106-1.333 2.106-2.376 2.106-2.376m6.1-13.4c-.32.1 5.164-2.005 8.282 1.978 1.1 1.407-.175 7.157-3.228 11.687" stroke-linejoin="round"/><path d="m20.425 15.17s.2.98 3.1.382c1.267-.262.504.734-.78 1.33-1.054.49-3.418.615-3.457-.06-.1-1.745 1.244-1.215 1.147-1.652-.088-.394-.69-.78-1.086-1.744-.347-.84-4.76-7.29 1.224-6.333.22-.045-1.56-5.7-7.16-5.782s-5.423 6.885-5.423 6.885" stroke-linejoin="bevel"/></g><g stroke-linejoin="round"><path d="m11.247 15.768c-.78.872-.55 1.025-2.11 1.346-1.578.325-.65.904-.046 1.056.734.184 2.432.444 3.58-1.163.35-.49-.002-1.27-.482-1.468-.232-.096-.542-.216-.94.23z"/><path d="m11.196 15.753c-.08-.513.168-1.122.433-1.836.398-1.07 1.316-2.14.582-5.537-.547-2.53-4.22-.527-4.22-.184s.166 1.74-.06 3.365c-.297 2.122 1.35 3.916 3.246 3.733" stroke-linecap="round"/></g></g><g fill="#fff"><path d="m10.322 8.145c-.017.117.215.43.516.472s.558-.202.575-.32-.215-.246-.516-.288-.56.02-.575.136z" stroke-width=".239"/><path d="m19.486 7.906c.016.117-.215.43-.516.472s-.56-.202-.575-.32.215-.246.516-.288.56.02.575.136z" stroke-width=".119"/></g><path d="m20.562 7.095c.05.92-.198 1.545-.23 2.524-.046 1.422.678 3.05-.413 4.68" stroke-linecap="round" stroke-linejoin="round" stroke-width=".716"/></g></svg>
          </div>
          <div class = 'project-buttons'> 
            <a href = 'https://project-blackburn-client.vercel.app/' target = '_blank' class = 'view-button' id = 'view-quiz-code'> View Project</a>
            <a href = 'https://github.com/thinkful-ei-narwhal/project-blackburn-client' target = '_blank' class = 'view-button' id = 'view-project'> View Code </a>
          </div>
      </div>
      <div class = 'project' id = 'project-three'>
        <h3 class = 'project-header'> Spaced Repetition </h3>
        <img id = 'quiz' src = 'https://i.imgur.com/M4qZgMF.png' alt = 'quiz screenshot'>
        <p class = 'project-description'>
           This project was created to help people learn a language faster.
           It utilizes algorithm to only test you on words you struggle with. 
           This algorithm tracks the users data as they guess words and helps them learn faster and more efficiently.
        </p>
        <div class = 'technologies'>
            <i class="fab fa-html5 font-awesome tech-padding"></i>
            <i class="fab fa-js font-awesome tech-padding"></i>
            <i class="fab fa-css3-alt font-awesome tech-padding"></i>
            <svg height="32" viewBox="0 0 25.6 25.6" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#fff"><path d="m18.983 18.636c.163-1.357.114-1.555 1.124-1.336l.257.023c.777.035 1.793-.125 2.4-.402 1.285-.596 2.047-1.592.78-1.33-2.89.596-3.1-.383-3.1-.383 3.053-4.53 4.33-10.28 3.227-11.687-3.004-3.84-8.205-2.024-8.292-1.976l-.028.005c-.57-.12-1.2-.19-1.93-.2-1.308-.02-2.3.343-3.054.914 0 0-9.277-3.822-8.846 4.807.092 1.836 2.63 13.9 5.66 10.25 1.109-1.334 2.179-2.461 2.179-2.461.53.353 1.167.533 1.834.468l.052-.044a2.01 2.01 0 0 0 .021.518c-.78.872-.55 1.025-2.11 1.346-1.578.325-.65.904-.046 1.056.734.184 2.432.444 3.58-1.162l-.046.183c.306.245.285 1.76.33 2.842s.116 2.093.337 2.688.48 2.13 2.53 1.7c1.713-.367 3.023-.896 3.143-5.81" fill="#000" stroke="#000" stroke-width="2.149"/><path d="m23.535 15.6c-2.89.596-3.1-.383-3.1-.383 3.053-4.53 4.33-10.28 3.228-11.687-3.004-3.84-8.205-2.023-8.292-1.976l-.028.005a10.31 10.31 0 0 0 -1.929-.201c-1.308-.02-2.3.343-3.054.914 0 0-9.278-3.822-8.846 4.807.092 1.836 2.63 13.9 5.66 10.25 1.116-1.342 2.186-2.469 2.186-2.469.53.353 1.167.533 1.834.468l.052-.044a2.02 2.02 0 0 0 .021.518c-.78.872-.55 1.025-2.11 1.346-1.578.325-.65.904-.046 1.056.734.184 2.432.444 3.58-1.162l-.046.183c.306.245.52 1.593.484 2.815s-.06 2.06.18 2.716.48 2.13 2.53 1.7c1.713-.367 2.6-1.32 2.725-2.906.088-1.128.286-.962.3-1.97l.16-.478c.183-1.53.03-2.023 1.085-1.793l.257.023c.777.035 1.794-.125 2.39-.402 1.285-.596 2.047-1.592.78-1.33z" fill="#336791" stroke="none"/><g stroke-width=".716"><g stroke-linecap="round"><path d="m12.814 16.467c-.08 2.846.02 5.712.298 6.4s.875 2.05 2.926 1.612c1.713-.367 2.337-1.078 2.607-2.647l.633-5.017m-8.922-14.615s-9.284-3.796-8.852 4.833c.092 1.836 2.63 13.9 5.66 10.25 1.106-1.333 2.106-2.376 2.106-2.376m6.1-13.4c-.32.1 5.164-2.005 8.282 1.978 1.1 1.407-.175 7.157-3.228 11.687" stroke-linejoin="round"/><path d="m20.425 15.17s.2.98 3.1.382c1.267-.262.504.734-.78 1.33-1.054.49-3.418.615-3.457-.06-.1-1.745 1.244-1.215 1.147-1.652-.088-.394-.69-.78-1.086-1.744-.347-.84-4.76-7.29 1.224-6.333.22-.045-1.56-5.7-7.16-5.782s-5.423 6.885-5.423 6.885" stroke-linejoin="bevel"/></g><g stroke-linejoin="round"><path d="m11.247 15.768c-.78.872-.55 1.025-2.11 1.346-1.578.325-.65.904-.046 1.056.734.184 2.432.444 3.58-1.163.35-.49-.002-1.27-.482-1.468-.232-.096-.542-.216-.94.23z"/><path d="m11.196 15.753c-.08-.513.168-1.122.433-1.836.398-1.07 1.316-2.14.582-5.537-.547-2.53-4.22-.527-4.22-.184s.166 1.74-.06 3.365c-.297 2.122 1.35 3.916 3.246 3.733" stroke-linecap="round"/></g></g><g fill="#fff"><path d="m10.322 8.145c-.017.117.215.43.516.472s.558-.202.575-.32-.215-.246-.516-.288-.56.02-.575.136z" stroke-width=".239"/><path d="m19.486 7.906c.016.117-.215.43-.516.472s-.56-.202-.575-.32.215-.246.516-.288.56.02.575.136z" stroke-width=".119"/></g><path d="m20.562 7.095c.05.92-.198 1.545-.23 2.524-.046 1.422.678 3.05-.413 4.68" stroke-linecap="round" stroke-linejoin="round" stroke-width=".716"/></g></svg>
        </div>
        <div class = 'project-buttons'> 
          <a href = 'https://spaced-repetition.lstribli.vercel.app/register' target = '_blank' class = 'view-button' id = 'view-quiz-code'> View Project</a>
          <a href = 'https://github.com/thinkful-ei-narwhal/spaced-repetition-client-Jacob-Logan' target = '_blank' class = 'view-button' id = 'view-project'> View Code </a>
        </div>
      </div>
    </div>
  </main>
  `;
};

const generateFooter = function () {
  return `
  <footer>
    <div class = 'footer' id = 'contact'>
      <div id = 'icons'>
        <a href = 'mailto:jacobflaxman1@gmail.com' target = '_blank' > <i class="icon fas fa-envelope aria-hidden = 'false' "> </i> </a>
        <a href = 'https://github.com/jacobflaxman1' target = '_blank' > <i class="icon fab fa-github"></i> </a>
        <a href = 'https://www.linkedin.com/in/jacob-flaxman-513064171' target = '_blank'> <i class="icon fab fa-linkedin"></i> </a>
      </div>
    </div>
  </footer>
  
  `;
};

const render = function () {
  const aboutMe = `${generateAboutMe()} ${generateFooter()}`;
  const renderHTML = `${generateNavBar()} ${generateHeader()} ${generateAboutMe()}  ${generateProjects()} ${generateFooter()} `;
  $(".container").append(renderHTML);
};

render();
