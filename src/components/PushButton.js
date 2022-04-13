import {Part} from "./Part";

export class PushButton extends Part{

    latching = false;
    canConnectToDigital = true;
    canConnectToAnalog = true;
}