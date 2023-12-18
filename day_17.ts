export type RockPaperScissors = "👊🏻" | "🖐🏾" | "✌🏽";

export type WinMap = { "👊🏻": "✌🏽"; "✌🏽": "🖐🏾"; "🖐🏾": "👊🏻" };

export type WhoWins<
  PlayerOneMove extends RockPaperScissors,
  PlayerTwoMove extends RockPaperScissors
> = PlayerOneMove extends PlayerTwoMove
  ? "draw"
  : WinMap[PlayerTwoMove] extends PlayerOneMove
  ? "win"
  : "lose";
