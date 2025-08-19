import { Enlisted as EnlistedEvent } from "../generated/Enlist/Enlist";
import { Enlisted } from "../generated/schema";

export function handleEnlisted(event: EnlistedEvent): void {
    let entity = new Enlisted(event.params.user);
    entity.save();
}