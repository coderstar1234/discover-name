function findNature() {
    let name = document.getElementById("name").value;
    
    if (name == "") {
        alert("Please enter your name!");
        return;
    }

    let firstLetter = name.charAt(0).toUpperCase();
    let nature = ""; 

    switch (firstLetter) {
        case "A":
            nature = "Adventurous and Ambitious";
            break;
        case "B":
            nature = "Brave and Benevolent";
            break;
        case "C":
            nature = "Charismatic and Creative";
            break;
        case "D":
            nature = "Determined and Decisive";
            break;
        case "E":
            nature = "Energetic and Enthusiastic";
            break;
        case "F":
            nature = "Friendly and Forgiving";
            break;
        case "G":
            nature = "Generous and Gracious";
            break;
        case "H":
            nature = "Honest and Humble";
            break;
        case "I":
            nature = "Intelligent and Imaginative";
            break;
        case "J":
            nature = "Joyful and Just";
            break;
        case "K":
            nature = "Kind and Knowledgeable";
            break;
        case "L":
            nature = "Loyal and Loving";
            break;
        case "M":
            nature = "Magnetic and Merciful";
            break;
        case "N":
            nature = "Nurturing and Noble";
            break;
        case "O":
            nature = "Optimistic and Open-minded";
            break;
        case "P":
            nature = "Passionate and Patient";
            break;
        case "Q":
            nature = "Quick-witted and Qualified";
            break;
        case "R":
            nature = "Resourceful and Reliable";
            break;
        case "S":
            nature = "Sincere and Strong-willed";
            break;
        case "T":
            nature = "Talented and Tenacious";
            break;
        case "U":
            nature = "Unique and Unstoppable";
            break;
        case "V":
            nature = "Visionary and Virtuous";
            break;
        case "W":
            nature = "Warm-hearted and Wise";
            break;
        case "X":
            nature = "Xenial and Xtraordinary";
            break;
        case "Y":
            nature = "Youthful and Yearning";
            break;
        case "Z":
            nature = "Zealous and Zestful";
            break;
        default:
            nature = "unknown";
    }

    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Hello, " + name + "! Your nature is " + nature + "😍.";
}
