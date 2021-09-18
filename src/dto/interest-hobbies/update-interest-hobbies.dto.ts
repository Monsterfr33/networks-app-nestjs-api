import { BaseInterestHobby } from "./base-interest-hobbies.dto";

export class UpdateInterestHobbyDto extends BaseInterestHobby {
  completedAt: Date;
}