import { Agent } from "model/agents/basic-agent"

class Removed extends Agent {
    constructor(unique_id, position, model, now_in_center=false,
        last_pos=undefined, infected=false, steps_since_infection=0,
        has_infected=0) {

        super(unique_id, position, model, now_in_center, last_pos, has_infected);
        this.className = "Removed";
    }    
    // step
    step(){
        this.hotspot_move()
        // no interaction - only occupying space
    }

}

export { Removed }