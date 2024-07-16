export const BOARD_HEIGHT = 20
export const BOARD_WIDTH = 10
export const TETRO_LETTERS = ['I', 'J', 'L', 'O', 'T', 'S', 'Z']
export const LEVELS: { [key: number]: number } = {
  0: 10, // Level 1 starts after clearing 10 lines
  1: 20, // Level 2 starts after clearing 20 lines
  2: 30, // Level 3 starts after clearing 30 lines
  3: 40, // Level 4 starts after clearing 40 lines
  4: 50, // Level 5 starts after clearing 50 lines
  5: 60, // Level 6 starts after clearing 60 lines
  6: 70, // Level 7 starts after clearing 70 lines
  7: 80, // Level 8 starts after clearing 80 lines
  8: 90, // Level 9 starts after clearing 90 lines
  9: 100, // Level 10 starts after clearing 100 lines
}

export const DROP_TIMES: { [key: number]: number } = {
  0: 800, // Level 0
  1: 717, // Level 1
  2: 633, // Level 2
  3: 550, // Level 3
  4: 467, // Level 4
  5: 383, // Level 5
  6: 300, // Level 6
  7: 217, // Level 7
  8: 133, // Level 8
  9: 100, // Level 9
  10: 83, // Level 10 and etc
}
