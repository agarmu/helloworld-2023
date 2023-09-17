export default class CourseModel {
    id: string;
    courseNumber: number;
    title: string;
    credits: number;
    description: string;
    subject: string;
    constructor(id: string,
    courseNumber: number,
    title: string,
    credits: number,
    description: string,
    subject: string) {
        this.id = id;
        this.courseNumber = courseNumber;
        this.title = title;
        this.credits = credits;
        this.description = description;
        this.subject = subject;
    }
    parse(data: any, subject: string): CourseModel {
        return new CourseModel(
            data["Id"],
            data["Number"],
            data["Title"],
            data["CreditHours"],
            data["Description"],
            subject
        )
    }
}