const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');
const startButton = document.getElementById('start-button');

const ROWS = 20;
const COLS = 10;
const BLOCK_SIZE = 30;
const COLORS = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];

let gameInterval;
let score = 0;

function createBoard() {
    return Array(ROWS).fill(null).map(() => Array(COLS).fill(0));
}

function drawBoard(board) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

