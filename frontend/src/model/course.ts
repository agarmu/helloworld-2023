export default class CourseModel {
    id: string;
    courseNumber: number;
    title: string;
    credits: number;
    description: string;
    subject: string;
    subjectId: string;
    constructor(id: string,
    courseNumber: number,
    title: string,
    credits: number,
    description: string,
    subjectId: string) {
        this.id = id;
        this.courseNumber = courseNumber;
        this.title = title;
        this.credits = credits;
        this.description = description;
        this.subjectId = subjectId;
    }
    parse(data: any): CourseModel {
        return new CourseModel(
            data["Id"],
            data["Number"],
            data["Title"],
            data["CreditHours"],
            data["Description"],
            data["SubjectId"]
        )
    }
    setSubject(s: string) {
        this.subject = s;
    }
}