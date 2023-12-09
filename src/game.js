import { Game } from "./logic";
import { layout } from "./render"

function main(){
    const game = Game();
    game.init();
    layout(game);
}

main();