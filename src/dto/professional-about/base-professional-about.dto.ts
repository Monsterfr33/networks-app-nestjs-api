export class BaseProfessionalAbout {
    title: string
    name: string
    about: string
    email: string
    password: string
    contact: string
    address: string
    website: string
    educations: [
        {
            image: string,
            universityName: string,
            degree: string,
            startDate: Date,
            endDate: Date
        }
    ]
    experiences: [
        {
            image: string,
            designation: string,
            companyName: string,
            startDate: Date,
            endDate: Date
        }
    ]
    certifications: [
        {
            image: string,
            certification: string,
            companyName: string,
            startDate: Date,
            endDate: Date
        }
    ]
    skills: [
        {
            name: string
        }
    ]
}