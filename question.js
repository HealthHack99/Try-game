// Sample question arrays for each subject and level
const questionsData = {
    'mathematics-level1': [{
            numb: 1,
            question: "Which number is the equivalent to 3^(4)/3^(2)?",
            answer: "[B] 9",
            options: ["[A] -3", "[B] 9", "[C] 3", "[D] 6"]
        },
        {
            numb: 2,
            question: "What is next in the following number series: 256, 289, 324, 361 . . . ?",
            answer: "[A] 400",
            options: ["[A] 400", "[B] 200", "[C] 800", "[D] 600"]
        },
        {
            numb: 3,
            question: "How many vertices are present on a cube?",
            answer: "[B] 8",
            options: ["[A] 6", "[B] 8", "[C] 10", "[D] 14"]
        },
        {
            numb: 4,
            question: "Solve the following equation: -15 + (-5x)=0.",
            answer: "[D] -3",
            options: ["[A] 3", "[B] 9", "[C] 6", "[D] -3"]
        },
        {
            numb: 5,
            question: "Which prime number is closest to 100?",
            answer: "[C] 101",
            options: ["[A] 122", "[B] 150", "[C] 101", "[D] 45"]
        }
    ],
    'mathematics-level2': [{
            numb: 1,
            question: "Cube root of 1331 is:",
            answer: "[A] 11",
            options: ["[A] 11", "[B] 15", "[C] 17", "[D] 28"]
        },
        {
            numb: 2,
            question: "The area of a rectangle is equal to:",
            answer: "[A] Length x Breadth",
            options: ["[A] Length x Breadth", "[B] L^2", "[C] B^2", "[D] Length x Breadth x Hypotenuse"]
        },
        {
            numb: 3,
            question: "A regular polygon has all its sides:",
            answer: "[A] Equal",
            options: ["[A] Equal", "[B] Unequal", "[C] 2 Sides equal", "[D] None of the above"]
        },
        {
            numb: 4,
            question: "What is the highest common factor of the numbers 30 and 132?",
            answer: "[B] 6",
            options: ["[A] 3", "[B] 6", "[C] 9", "[D] 1"]
        },
        {
            numb: 5,
            question: "The square root of 5 is:",
            answer: "[B] 2.23",
            options: ["[A] 3.8", "[B] 2.23", "[C] 4.1", "[D] 2"]
        }
    ],
    'mathematics-level3': [{
            numb: 1,
            question: "What is the derivative of sin(x)?",
            answer: "[A] cos(x)",
            options: ["[A] cos(x)", "[B] sin(x)", "[C] -sin(x)", "[D] -cos(x)"]
        },
        {
            numb: 2,
            question: "What is the integral of 1/x?",
            answer: "[B] ln(x)",
            options: ["[A] x^2", "[B] ln(x)", "[C] 1/x", "[D] e^x"]
        },
        {
            numb: 3,
            question: "What is the limit of (1 + 1/n)^n as n approaches infinity?",
            answer: "[C] e",
            options: ["[A] 1", "[B] infinity", "[C] e", "[D] 0"]
        },
        {
            numb: 4,
            question: "If y = x^3, what is dy/dx?",
            answer: "[D] 3x^2",
            options: ["[A] x^2", "[B] 3x", "[C] x^3", "[D] 3x^2"]
        },
        {
            numb: 5,
            question: "What is the value of log10(1000)?",
            answer: "[C] 3",
            options: ["[A] 10", "[B] 100", "[C] 3", "[D] 0.001"]
        }
    ],
    'mathematics-level4': [{
            numb: 1,
            question: "What is the value of the derivative of e^x?",
            answer: "[A] e^x",
            options: ["[A] e^x", "[B] e", "[C] 1", "[D] x"]
        },
        {
            numb: 2,
            question: "If f(x) = ln(x), what is f'(x)?",
            answer: "[B] 1/x",
            options: ["[A] x", "[B] 1/x", "[C] ln(x)", "[D] e^x"]
        },
        {
            numb: 3,
            question: "What is the Taylor series expansion of e^x?",
            answer: "[D] 1 + x + x^2/2! + x^3/3! + ...",
            options: ["[A] x^n", "[B] 1 + x", "[C] 1 + x^2", "[D] 1 + x + x^2/2! + x^3/3! + ..."]
        },
        {
            numb: 4,
            question: "What is the solution to the equation: x^2 - 4x + 4 = 0?",
            answer: "[C] x = 2",
            options: ["[A] x = -2", "[B] x = 0", "[C] x = 2", "[D] No solution"]
        },
        {
            numb: 5,
            question: "What is the second derivative of x^3?",
            answer: "[C] 6x",
            options: ["[A] 3x^2", "[B] x^2", "[C] 6x", "[D] 0"]
        }
    ],
    'biology-level1': [{
            numb: 1,
            question: "Ordinary table salt is sodium chloride. What is baking soda?",
            answer: "[D] Sodium bicarbonate",
            options: ["[A] Potassium carbonate", "[B] Potassium chloride", "[C] Potassium hydroxide", "[D] Sodium bicarbonate"]
        },
        {
            numb: 2,
            question: "Ozone hole refers to",
            answer: "[C] decrease in thickness of ozone layer in stratosphere",
            options: ["[A] hole in ozone layer", "[B] decrease in the ozone layer in troposphere", "[C] decrease in thickness of ozone layer in stratosphere", "[D] increase in the thickness of ozone layer in troposphere"]
        },
        {
            numb: 3,
            question: "Pollination is best defined as",
            answer: "[A] transfer of pollen from anther to stigma",
            options: ["[A] transfer of pollen from anther to stigma", "[B] germination of pollen grains", "[C] growth of pollen tube in ovule", "[D] visiting flowers by insects"]
        },
        {
            numb: 4,
            question: "Plants receive their nutrients mainly from",
            answer: "[D] Soil",
            options: ["[A] chlorophyll", "[B] atmosphere", "[C] Light", "[D] Soil"]
        },
        {
            numb: 5,
            question: "Spermology is the study of",
            answer: "[C] Seeds",
            options: ["[A] Animals", "[B] Plants", "[C] Seeds", "[D] Humans"]
        }
    ],
    'biology-level2': [{
            numb: 1,
            question: "Can cell walls be found in plant cells, animal cells or both?",
            answer: "[B] Plants",
            options: ["[A] Animals", "[B] Plants", "[C] Both of above", "[D] None of Above"]
        },
        {
            numb: 2,
            question: "What is the name of the biggest part of the human brain?",
            answer: "[D] Skin",
            options: ["[A] Leg", "[B] Arms", "[C] Foot", "[D] Skin"]
        },
        {
            numb: 3,
            question: "A DNA molecule is described as being what shape?",
            answer: "[A] Double Helix",
            options: ["[A] Double Helix", "[B] Single Helix", "[C] Cylindrical", "[D] Round"]
        },
        {
            numb: 4,
            question: "Which of the following is a large blood vessel that carries blood away from the heart?",
            answer: "[B] Artery",
            options: ["[A] Vein", "[B] Artery", "[C] Capillary", "[D] Nerve"]
        },
        {
            numb: 5,
            question: "Which of the following is not a member of the vitamin B complex?",
            answer: "[D] Ascorbic acid",
            options: ["[A] Thiamine", "[B] Riboflavin", "[C] Folic acid", "[D] Ascorbic acid"]
        }
    ],
    'biology-level3': [{
            numb: 1,
            question: "What is the function of mitochondria in cells?",
            answer: "[B] Produce energy",
            options: ["[A] Store genetic material", "[B] Produce energy", "[C] Detoxify harmful substances", "[D] Aid in cell division"]
        },
        {
            numb: 2,
            question: "What is the study of heredity called?",
            answer: "[C] Genetics",
            options: ["[A] Biology", "[B] Ecology", "[C] Genetics", "[D] Microbiology"]
        },
        {
            numb: 3,
            question: "What is the powerhouse of the cell?",
            answer: "[A] Mitochondria",
            options: ["[A] Mitochondria", "[B] Ribosome", "[C] Nucleus", "[D] Golgi apparatus"]
        },
        {
            numb: 4,
            question: "Which of the following structures is found in plant cells but not animal cells?",
            answer: "[B] Cell wall",
            options: ["[A] Mitochondria", "[B] Cell wall", "[C] Ribosome", "[D] Nucleus"]
        },
        {
            numb: 5,
            question: "What is the basic structural and functional unit of life?",
            answer: "[D] The cell",
            options: ["[A] Organ", "[B] Tissue", "[C] Atom", "[D] The cell"]
        }
    ],
    'biology-level4': [{
            numb: 1,
            question: "What is the function of chloroplasts in plant cells?",
            answer: "[A] Photosynthesis",
            options: ["[A] Photosynthesis", "[B] Cellular respiration", "[C] Protein synthesis", "[D] Energy storage"]
        },
        {
            numb: 2,
            question: "What is the genetic material that carries the instructions for the functioning of cells?",
            answer: "[B] DNA",
            options: ["[A] RNA", "[B] DNA", "[C] Proteins", "[D] Lipids"]
        },
        {
            numb: 3,
            question: "What type of bond holds the two strands of DNA together?",
            answer: "[D] Hydrogen bonds",
            options: ["[A] Ionic bonds", "[B] Covalent bonds", "[C] Peptide bonds", "[D] Hydrogen bonds"]
        },
        {
            numb: 4,
            question: "What organelle is responsible for packaging and transporting proteins within the cell?",
            answer: "[C] Golgi apparatus",
            options: ["[A] Nucleus", "[B] Ribosomes", "[C] Golgi apparatus", "[D] Lysosomes"]
        },
        {
            numb: 5,
            question: "What is the primary function of ribosomes?",
            answer: "[B] Protein synthesis",
            options: ["[A] Energy production", "[B] Protein synthesis", "[C] DNA replication", "[D] Cellular respiration"]
        }
    ],

    'chemistry-level1': [{
            numb: 1,
            question: "Which of the following does not increase when we move from left to right along a period in the periodic table?",
            answer: "[D] Reducing power",
            options: ["[A] Oxidising Power of elements", "[B] Electronegativity", "[C] Non-metallic Character", "[D] Reducing power"]
        },
        {
            numb: 2,
            question: "Which among the following is known as Quick Lime?",
            answer: "[A] CaO",
            options: ["[A] CaO", "[B] CaCO2", "[C] Ca(OH)2", "[D] CaCl2"]
        },
        {
            numb: 3,
            question: "The most important Aluminium ore is?",
            answer: "[B] Bauxite",
            options: ["[A] Limestone", "[B] Bauxite", "[C] Granite", "[D] Lead"]
        },
        {
            numb: 4,
            question: "Which among the following is a common salt in Detergents?",
            answer: "[C] Sulphonate",
            options: ["[A] Sulphate", "[B] Nitrate", "[C] Sulphonate", "[D] Carbonate"]
        },
        {
            numb: 5,
            question: "Which of the following is not a common use of Graphite?",
            answer: "[D] In glass cutting",
            options: ["[A] Manufacturing of electrodes", "[B] As a lubricant", "[C] Manufacturing of crucibles", "[D] In glass cutting"]
        }
    ],
    'chemistry-level2': [{
            numb: 1,
            question: "Which of the following is NOT correct about Xenon Hexafluoride?",
            answer: "[C] Both a and b",
            options: ["[A] It is a noble gas compound", "[B] At room temperature, it is a colourless liquid", "[C] Both a and b", "[D] None"]
        },
        {
            numb: 2,
            question: "Which of the following elements have ns1 outermost electronic configuration?",
            answer: "[A] s-block elements",
            options: ["[A] s-block elements", "[B] p-block elements", "[C] d-block elements", "[D] f-block elements"]
        },
        {
            numb: 3,
            question: "What percentage of Human body is made up of carbon?",
            answer: "[B] 18.5",
            options: ["[A] 12", "[B] 18.5", "[C] 28.8", "[D] 44.2"]
        },
        {
            numb: 4,
            question: "What is the common name of But-2-yne?",
            answer: "[B] Methylacetylene",
            options: ["[A] Acetylene", "[B] Methylacetylene", "[C] Ethylacetylene", "[D] Dimethylacetylene"]
        },
        {
            numb: 5,
            question: "Which among the following is the rarest element on Earth?",
            answer: "[C] Astatine",
            options: ["[A] Francium", "[B] Curium", "[C] Astatine", "[D] Neptunium"]
        }
    ],
    'chemistry-level3': [{
            numb: 1,
            question: "What is the most abundant gas in Earth's atmosphere?",
            answer: "[A] Nitrogen",
            options: ["[A] Nitrogen", "[B] Oxygen", "[C] Carbon dioxide", "[D] Hydrogen"]
        },
        {
            numb: 2,
            question: "What is the chemical formula for table salt?",
            answer: "[C] NaCl",
            options: ["[A] Na2CO3", "[B] KCl", "[C] NaCl", "[D] NaOH"]
        },
        {
            numb: 3,
            question: "What is the pH of pure water?",
            answer: "[B] 7",
            options: ["[A] 0", "[B] 7", "[C] 14", "[D] 1"]
        },
        {
            numb: 4,
            question: "What is the process by which a gas turns into a liquid?",
            answer: "[D] Condensation",
            options: ["[A] Evaporation", "[B] Sublimation", "[C] Freezing", "[D] Condensation"]
        },
        {
            numb: 5,
            question: "What is the main component of natural gas?",
            answer: "[B] Methane",
            options: ["[A] Ethane", "[B] Methane", "[C] Propane", "[D] Butane"]
        }
    ],
    'chemistry-level4': [{
            numb: 1,
            question: "Which element has the highest electronegativity?",
            answer: "[C] Fluorine",
            options: ["[A] Oxygen", "[B] Nitrogen", "[C] Fluorine", "[D] Chlorine"]
        },
        {
            numb: 2,
            question: "What is the process of a liquid turning into a gas?",
            answer: "[A] Evaporation",
            options: ["[A] Evaporation", "[B] Sublimation", "[C] Condensation", "[D] Freezing"]
        },
        {
            numb: 3,
            question: "Which gas is commonly used in balloons?",
            answer: "[D] Helium",
            options: ["[A] Oxygen", "[B] Nitrogen", "[C] Hydrogen", "[D] Helium"]
        },
        {
            numb: 4,
            question: "What is the chemical symbol for gold?",
            answer: "[C] Au",
            options: ["[A] Ag", "[B] Ga", "[C] Au", "[D] Gd"]
        },
        {
            numb: 5,
            question: "Which acid is commonly known as battery acid?",
            answer: "[B] Sulfuric acid",
            options: ["[A] Hydrochloric acid", "[B] Sulfuric acid", "[C] Nitric acid", "[D] Acetic acid"]
        }
    ],

    'physics-level1': [{
            numb: 1,
            question: "Which of the following is an instrument for measuring electric charge or electrical potential difference?",
            answer: "[C] Electrometer",
            options: ["[A] Ammeter", "[B] Voltmeter", "[C] Electrometer", "[D] Ohmmeter"]
        },
        {
            numb: 2,
            question: "The pulling sensation when we stand near a running train can be explained on the basis of",
            answer: "[B] Bernoulli’s law",
            options: ["[A] Archimedes Principle", "[B] Bernoulli’s law", "[C] Avogadro’s Hypothesis", "[D] Newton’s Third Law of motion"]
        },
        {
            numb: 3,
            question: "An object is executing uniform circular motion. Which of the following quantities remain(s) constant during the object’s motion?",
            answer: "[D] Speed only",
            options: ["[A] Velocity and acceleration", "[B] Speed and velocity", "[C] Speed and acceleration", "[D] Speed only"]
        },
        {
            numb: 4,
            question: "Which of the following is the unit of Solid Angle?",
            answer: "[B] Steradian",
            options: ["[A] Radian", "[B] Steradian", "[C] m2", "[D] π"]
        },
        {
            numb: 5,
            question: "Power of lens is measured in which of the following units?",
            answer: "[B] Dioptre",
            options: ["[A] Metre", "[B] Dioptre", "[C] Lumen", "[D] Watt"]
        }
    ],
    'physics-level2': [{
            numb: 1,
            question: "Which of these is NOT an example of Periodic motion?",
            answer: "[D] None of the above",
            options: ["[A] Revolution of earth around the sun", "[B] Rotation of earth about its polar axis", "[C] Motion of minute’s hand of a clock", "[D] None of the above"]
        },
        {
            numb: 2,
            question: "In which of the following the sound cannot travel?",
            answer: "[D] Vacuum",
            options: ["[A] Solids", "[B] Liquids", "[C] Gases", "[D] Vacuum"]
        },
        {
            numb: 3,
            question: "What is meant by Calorimetry?",
            answer: "[A] Measurement of heat",
            options: ["[A] Measurement of heat", "[B] Measurement of temperature", "[C] Measurement of specific heat capacity", "[D] None of the above"]
        },
        {
            numb: 4,
            question: "What kind of cell is the mobile phone battery when it is being charged?",
            answer: "[C] Electrolytic cell",
            options: ["[A] Galvanic cell", "[B] Fuel cell", "[C] Electrolytic cell", "[D] None of the above"]
        },
        {
            numb: 5,
            question: "Which of the following is NOT a natural magnet?",
            answer: "[D] Titanium",
            options: ["[A] Lodestone", "[B] Pyrrhotite", "[C] Columbite", "[D] Titanium"]
        }
    ],
    'physics-level3': [{
            numb: 1,
            question: "What is the unit of magnetic flux?",
            answer: "[B] Weber",
            options: ["[A] Tesla", "[B] Weber", "[C] Gauss", "[D] Joule"]
        },
        {
            numb: 2,
            question: "What is the SI unit of electric charge?",
            answer: "[A] Coulomb",
            options: ["[A] Coulomb", "[B] Ohm", "[C] Volt", "[D] Farad"]
        },
        {
            numb: 3,
            question: "What is the speed of light in a vacuum?",
            answer: "[C] 299,792,458 m/s",
            options: ["[A] 300,000,000 m/s", "[B] 3.00 x 10^8 m/s", "[C] 299,792,458 m/s", "[D] 3.00 x 10^5 m/s"]
        },
        {
            numb: 4,
            question: "Which law states that the force between two charges is directly proportional to the product of their charges and inversely proportional to the square of the distance between them?",
            answer: "[A] Coulomb's Law",
            options: ["[A] Coulomb's Law", "[B] Ohm's Law", "[C] Newton's First Law", "[D] Ampere's Law"]
        },
        {
            numb: 5,
            question: "What is the unit of inductance?",
            answer: "[B] Henry",
            options: ["[A] Tesla", "[B] Henry", "[C] Weber", "[D] Farad"]
        }
    ],
    'physics-level4': [{
            numb: 1,
            question: "Who proposed the theory of general relativity?",
            answer: "[C] Albert Einstein",
            options: ["[A] Isaac Newton", "[B] Galileo Galilei", "[C] Albert Einstein", "[D] James Clerk Maxwell"]
        },
        {
            numb: 2,
            question: "What is the force that keeps planets in orbit around the sun?",
            answer: "[B] Gravitational force",
            options: ["[A] Electromagnetic force", "[B] Gravitational force", "[C] Nuclear force", "[D] Frictional force"]
        },
        {
            numb: 3,
            question: "What is the acceleration due to gravity on Earth?",
            answer: "[A] 9.8 m/s^2",
            options: ["[A] 9.8 m/s^2", "[B] 10 m/s^2", "[C] 9.6 m/s^2", "[D] 9.81 m/s^2"]
        },
        {
            numb: 4,
            question: "What is the relationship between energy (E), mass (m), and the speed of light (c) as described by Einstein's famous equation?",
            answer: "[A] E = mc^2",
            options: ["[A] E = mc^2", "[B] E = m/c", "[C] E = mc", "[D] E = c/m"]
        },
        {
            numb: 5,
            question: "What is the measure of an object's resistance to changes in its state of motion?",
            answer: "[C] Inertia",
            options: ["[A] Weight", "[B] Force", "[C] Inertia", "[D] Friction"]
        }
    ],
    'general-knowledge-level1': [{
            numb: 1,
            question: "Which colour symbolises peace?",
            answer: "[C] White",
            options: ["[A] Black", "[B] Red", "[C] White", "[D] Green"]
        },
        {
            numb: 2,
            question: "Name the house made of ice?",
            answer: "[A] Igloo",
            options: ["[A] Igloo", "[B] Chilli", "[C] Mars", "[D] Earth"]
        },
        {
            numb: 3,
            question: "Name the largest mammal?",
            answer: "[D] Blue Whale",
            options: ["[A] Camel", "[B] Lion", "[C] Elephant", "[D] Blue Whale"]
        },
        {
            numb: 4,
            question: "Name the largest planet of our Solar System?",
            answer: "[C] Jupiter",
            options: ["[A] Mars", "[B] Earth", "[C] Jupiter", "[D] Saturn"]
        },
        {
            numb: 5,
            question: "Name the primary colours?",
            answer: "[A] Red, Green, Blue",
            options: ["[A] Red, Green, Blue", "[B] Red, Purple, Blue", "[C] Red, Yellow, Orange", "[D] Green, Blue, Magenta"]
        }
    ],
    'general-knowledge-level2': [{
            numb: 1,
            question: "Name the National game of the USA?",
            answer: "[A] Baseball",
            options: ["[A] Baseball", "[B] Hockey", "[C] Football", "[D] Cricket"]
        },
        {
            numb: 2,
            question: "Who invented the Watch?",
            answer: "[C] Peter Henlein",
            options: ["[A] Newton", "[B] Philips", "[C] Peter Henlein", "[D] Jordan"]
        },
        {
            numb: 3,
            question: "Which is the smallest bone in the human body?",
            answer: "[D] Ear Bone",
            options: ["[A] Finger", "[B] Nose", "[C] Thumb", "[D] Ear Bone"]
        },
        {
            numb: 4,
            question: "Name the hardest substance available on Earth?",
            answer: "[B] Diamond",
            options: ["[A] Stone", "[B] Diamond", "[C] Aluminum", "[D] Steel"]
        },
        {
            numb: 5,
            question: "Who gave the theory of Relativity?",
            answer: "[A] Albert Einstein",
            options: ["[A] Albert Einstein", "[B] Peterson", "[C] Newton", "[D] Pascal"]
        }
    ],
    'general-knowledge-level3': [{
            numb: 1,
            question: "Which country is known as the Land of the Rising Sun?",
            answer: "[C] Japan",
            options: ["[A] China", "[B] South Korea", "[C] Japan", "[D] Thailand"]
        },
        {
            numb: 2,
            question: "What is the capital city of Australia?",
            answer: "[A] Canberra",
            options: ["[A] Canberra", "[B] Sydney", "[C] Melbourne", "[D] Brisbane"]
        },
        {
            numb: 3,
            question: "Which planet is known as the Red Planet?",
            answer: "[D] Mars",
            options: ["[A] Earth", "[B] Venus", "[C] Jupiter", "[D] Mars"]
        },
        {
            numb: 4,
            question: "Who wrote the play 'Romeo and Juliet'?",
            answer: "[B] William Shakespeare",
            options: ["[A] Charles Dickens", "[B] William Shakespeare", "[C] Mark Twain", "[D] George Orwell"]
        },
        {
            numb: 5,
            question: "Which is the largest desert in the world?",
            answer: "[A] Sahara Desert",
            options: ["[A] Sahara Desert", "[B] Kalahari Desert", "[C] Gobi Desert", "[D] Arctic Desert"]
        }
    ],
    'general-knowledge-level4': [{
            numb: 1,
            question: "Who is known as the Father of Computer Science?",
            answer: "[C] Alan Turing",
            options: ["[A] Charles Babbage", "[B] Bill Gates", "[C] Alan Turing", "[D] Steve Jobs"]
        },
        {
            numb: 2,
            question: "Which ocean is the largest by surface area?",
            answer: "[A] Pacific Ocean",
            options: ["[A] Pacific Ocean", "[B] Atlantic Ocean", "[C] Indian Ocean", "[D] Arctic Ocean"]
        },
        {
            numb: 3,
            question: "Which country has the largest population?",
            answer: "[A] China",
            options: ["[A] China", "[B] India", "[C] USA", "[D] Indonesia"]
        },
        {
            numb: 4,
            question: "Which language has the most native speakers worldwide?",
            answer: "[B] Mandarin Chinese",
            options: ["[A] English", "[B] Mandarin Chinese", "[C] Spanish", "[D] Hindi"]
        },
        {
            numb: 5,
            question: "Which country is famous for the Great Wall?",
            answer: "[D] China",
            options: ["[A] Japan", "[B] Russia", "[C] India", "[D] China"]
        }
    ]
};

// Get subject and level from the URL
const urlParams = new URLSearchParams(window.location.search);
const subject = urlParams.get('subject').toLowerCase();
const level = urlParams.get('level').toLowerCase();

// Combine subject and level to match the key in `questionsData`
const quizKey = `${subject}-${level}`;


// Retrieve the correct question set based on the subject and level
const questions = questionsData[quizKey] || []; // Fallback to an empty array if no questions are found

let questionCount = 0; // Track the current question index
let score = 0; // Track the user's score

// Select necessary elements
const startBtn = document.querySelector(".start-btn");
const popupInfo = document.querySelector(".popup-info");
const exitBtn = document.querySelector(".exit-btn");
const continueBtn = document.querySelector(".continue-btn");
const main = document.querySelector(".main");
const quizSection = document.querySelector(".quiz-section");
const quizBox = document.querySelector(".quiz-box");
const questionText = document.querySelector(".question-text");
const optionList = document.querySelector(".option-list");
const questionTotal = document.querySelector(".question-total");
const nextBtn = document.querySelector(".next-btn");
const scoreDisplay = document.querySelector(".header-score");

// Show the initial popup and guide
startBtn.onclick = () => {
    popupInfo.classList.add("active");
    main.classList.add("active");
};

// Exit the quiz popup
exitBtn.onclick = () => {
    popupInfo.classList.remove("active");
    main.classList.remove("active");
};

// Continue to the quiz
continueBtn.onclick = () => {
    quizSection.classList.add("active");
    popupInfo.classList.remove("active");
    main.classList.remove("active");
    quizBox.classList.add("active");
    showQuestions(0);
};

// Function to load a question
function showQuestions(index) {
    nextBtn.disabled = true; // Disable the Next button initially
    nextBtn.style.backgroundColor = "#c24fa6"; // Set the disabled color
    nextBtn.style.cursor = "not-allowed"; // Change cursor for disabled state

    // Display question text
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

    // Clear previous options
    optionList.innerHTML = "";

    // Display options dynamically
    questions[index].options.forEach((option) => {
        let optionTag = `<div class="option" onclick="optionSelected(this, '${option}')"><span>${option}</span></div>`;
        optionList.innerHTML += optionTag;
    });

    // Update the question total (e.g., 1 of 5 Questions)
    questionTotal.textContent = `${questions[index].numb} of ${questions.length} Questions`;
}

// Function for option selection
function optionSelected(optionElement, selectedOption) {
    // Disable all options after one has been selected
    const allOptions = optionList.querySelectorAll(".option");
    allOptions.forEach((opt) => {
        opt.classList.add("disabled");
        opt.onclick = null; // Prevent further selection
    });

    // Highlight the selected option
    optionElement.classList.add("selected");

    // Check if the selected option is correct
    const correctAnswer = questions[questionCount].answer;
    if (selectedOption === correctAnswer) {
        score++; // Increment score for the correct answer
        scoreDisplay.textContent = `Score: ${score} / ${questions.length}`;
    }

    // Enable the Next button and change its color after an option is selected
    nextBtn.disabled = false;
    nextBtn.style.backgroundColor = "#C40094"; // Primary color
    nextBtn.style.color = "#FFF"; // Text color to white
    nextBtn.style.cursor = "pointer"; // Change cursor to indicate it's clickable

    // If this is the last question, change the button text to "Submit"
    if (questionCount === questions.length - 1) {
        nextBtn.textContent = "Submit";
    } else {
        nextBtn.textContent = "Next";
    }
}

// Handle the "Next" button click
nextBtn.onclick = () => {
    questionCount++;

    // If more questions exist, show the next one
    if (questionCount < questions.length) {
        showQuestions(questionCount);

        // Disable the Next button again until an option is selected
        nextBtn.disabled = true;
        nextBtn.style.backgroundColor = "#c24fa6"; // Reset to disabled color
        nextBtn.style.cursor = "not-allowed"; // Reset the cursor
    } else {
        // End of quiz behavior: show final score
        alert(`Quiz finished! Your final score is ${score} out of ${questions.length}`);
        window.location.href = "index.html";
    }
};

// Initial load of the first question
showQuestions(questionCount);

// Result
function showQuizResult(score, totalQuestions) {
    // Hide quiz elements
    const questionText = document.querySelector('.question-text');
    const optionList = document.querySelector('.option-list');
    const quizFooter = document.querySelector('.quiz-footer');

    questionText.style.display = 'none';
    optionList.style.display = 'none';
    quizFooter.style.display = 'none';

    // Show result container
    const resultContainer = document.querySelector('.result-container');
    resultContainer.style.display = 'block';

    // Update score text
    document.querySelector('.final-score').textContent = score;
    document.querySelector('.total-questions').textContent = totalQuestions;

    // Calculate percentage
    const percentage = Math.round((score / totalQuestions) * 100);

    // Setup circular progress
    const circle = document.querySelector('.progress-ring-circle');
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;

    // Animate percentage and circle
    let currentPercent = 0;
    const interval = setInterval(() => {
        if (currentPercent >= percentage) {
            clearInterval(interval);
        } else {
            currentPercent++;
            document.querySelector('.percentage').textContent = `${currentPercent}%`;
            const offset = circumference - (currentPercent / 100) * circumference;
            circle.style.strokeDashoffset = offset;
        }
    }, 20);

    // Add button event listeners
    document.querySelector('.try-again-btn').addEventListener('click', () => {
        window.location.reload();
    });

    document.querySelector('.go-home-btn').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
}

// Modify the existing quiz completion logic in your question.js
// Replace the alert with showQuizResult
nextBtn.onclick = () => {
    questionCount++;

    if (questionCount < questions.length) {
        showQuestions(questionCount);
        nextBtn.disabled = true;
        nextBtn.style.backgroundColor = "#c24fa6";
        nextBtn.style.cursor = "not-allowed";
    } else {
        // Replace the alert with this:
        showQuizResult(score, questions.length);
    }
};
