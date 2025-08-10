"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let StudentsScore = [
    8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3,
];
function calculateAverageScore(scores) {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }
    return total / scores.length;
}
