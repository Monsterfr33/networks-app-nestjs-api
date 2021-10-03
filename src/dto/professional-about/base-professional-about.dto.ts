export class BaseProfessionalAbout {
    title: string
    name: string
    about: string
    email: string
    password: string
    contact: string
    country: string
    postal: string
    city: string
    website: string
    educations: [
        {
            image: string,
            degree: string,
            startDate: Date,
            endDate: Date
        }
    ]
    experiences: [
        {
            image: string,
            designation: string,
            startDate: Date,
            endDate: Date
        }
    ]
    certifications: [
        {
            image: string,
            certification: string,
            startDate: Date,
            endDate: Date
        }
    ]
    skills: [
        {
            image: string,
            name: string,
            startDate: Date,
            endDate: Date
        }
    ]
}