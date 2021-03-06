const initialState = {
  matrix: new Array(9).fill(null),
  player1: "",
  player2: "",
  index: 0,
  xIsNext: "",
  gameStart: false,
  order:[],
  isDemo:false
 
};
const playerReducer = function (state = initialState, action) {
  switch (action.type) {
    case "ADD_PLAYER_1":
      return { ...state, player1: action.player };
    case "ADD_PLAYER_2":
      return { ...state, player2: action.player };
    case "GAME_START":
      return { ...state, gameStart: action.gameStart };
    case "GAME_UPDATE":
      return { ...state, matrix: action.matrix };
    case "UPDATE_NEXT":
      return { ...state, xIsNext: action.xIsNext };
    case "UPDATE_ORDER":
      return { ...state, order: action.order };  
    case "SHOW_DEMO":
      return { ...state, isDemo: action.isDemo };      
    default:
      return state;
  }
};
export default playerReducer;
