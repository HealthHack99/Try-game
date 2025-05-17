// Define the subjects for the filter
const subjects = ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'General-Knowledge'];

// Get the container where the buttons will be added
const btnContainer = document.getElementById('btns');

// Get the root container where the levels will be shown
const rootContainer = document.getElementById('root');

// Create subject buttons dynamically
subjects.forEach(subject => {
  const button = document.createElement('button');
  button.textContent = subject;
  button.style.marginBottom = '10px';
  button.addEventListener('click', () => displayLevels(subject));
  btnContainer.appendChild(button);
});

// Function to display levels for the clicked subject
function displayLevels(subject) {
  // Clear the root container before displaying new content
  rootContainer.innerHTML = '';

  // Create a container to hold both level boxes
  const subjectLevelBox = document.createElement('div');
  subjectLevelBox.classList.add('subject-level-box');

  // Level 1 Box
  const level1Box = document.createElement('div');
  level1Box.classList.add('level-box');
  level1Box.innerHTML = `
    <img src="images/${subject}-level1.jpg" alt="Level 1 Image">
    <h3>${subject} - Level 1</h3>
    <button id="level1-btn">Add to Cart</button>
  `;

  // Level 2 Box
  const level2Box = document.createElement('div');
  level2Box.classList.add('level-box');
  level2Box.innerHTML = `
    <img src="images/${subject}-level2.jpg" alt="Level 2 Image">
    <h3>${subject} - Level 2</h3>
    <button id="level2-btn">Add to Cart</button>
  `;

  // Level 3 Box
  const level3Box = document.createElement('div');
  level3Box.classList.add('level-box');
  level3Box.innerHTML = `
    <img src="images/${subject}-level3.jpg" alt="Level 3 Image">
    <h3>${subject} - Level 3</h3>
    <button id="level3-btn">Add to Cart</button>
  `;

  // Level 4 Box
  const level4Box = document.createElement('div');
  level4Box.classList.add('level-box');
  level4Box.innerHTML = `
    <img src="images/${subject}-level4.jpg" alt="Level 4 Image">
    <h3>${subject} - Level 4</h3>
    <button id="level4-btn">Add to Cart</button>
  `;

  // Append both level boxes to the subject level box
  subjectLevelBox.appendChild(level1Box);
  subjectLevelBox.appendChild(level2Box);
  subjectLevelBox.appendChild(level3Box);
  subjectLevelBox.appendChild(level4Box);

  // Append the subject level box to the root container
  rootContainer.appendChild(subjectLevelBox);

  // Add event listeners for the buttons
  const level1Btn = document.getElementById('level1-btn');
  const level2Btn = document.getElementById('level2-btn');
  const level3Btn = document.getElementById('level3-btn');
  const level4Btn = document.getElementById('level4-btn');

  level1Btn.addEventListener('click', () => redirectToQuiz(subject, 'Level1'));
  level2Btn.addEventListener('click', () => redirectToQuiz(subject, 'Level2'));
  level3Btn.addEventListener('click', () => redirectToQuiz(subject, 'Level3'));
  level4Btn.addEventListener('click', () => redirectToQuiz(subject, 'Level4'));
}

// Function to redirect to the quiz.html page with the selected subject and level
function redirectToQuiz(subject, level) {
  const url = `quiz.html?subject=${encodeURIComponent(subject)}&level=${encodeURIComponent(level)}`;
  window.location.href = url;
}
