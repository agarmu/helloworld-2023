export default class CourseModel {
    id: string;
    courseNumber: number;
    title: string;
    credits: number;
    description: string;
    constructor(id: string,
    courseNumber: number,
    title: string,
    credits: number,
    description: string,) {
        this.id = id;
        this.courseNumber = courseNumber;
        this.title = title;
        this.credits = credits;
        this.description = description;
    }
    parse(data: any): CourseModel {
        return new CourseModel(
            data["Id"],
            data["Number"],
            data["Title"],
            data["CreditHours"],
            data["Description"]
        )
    }
}