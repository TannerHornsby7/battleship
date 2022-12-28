import { Player } from "./logic";
import { layout } from "./render"

function main(){
    const player = Player();
    layout(player);
}

main();