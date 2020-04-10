import { Agent } from "model/agents/basic-agent"

class Infected extends Agent {
    constructor(unique_id, position, model, now_in_center=false,
        home=undefined, steps_since_infection=0,
        has_infected=0) {

      super(unique_id, position, model, now_in_center, home, has_infected);

      this.infected = true;
      this.steps_since_infection = steps_since_infection;
      this.className = "Infected";
    }
    
    
    // step
    step(){
        var to_r = -1

        // interact agents
        if (Math.floor(this.steps_since_infection / this.model.steps_each_day) > this.model.duration_mean) {
            to_r = this.unique_id

        } else {
            this.spread_infection();
            // move
            this.hotspot_move()

            // spread in new position
            this.spread_infection();
            this.steps_since_infection += 1;
        }

        // interact model - administration
        return to_r
    }

}

export { Infected }