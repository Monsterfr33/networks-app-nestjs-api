import { BaseProfessionalAbout } from "./base-professional-about.dto";

export class UpdateProfessionalAboutDto extends BaseProfessionalAbout {
  completedAt: Date;
}