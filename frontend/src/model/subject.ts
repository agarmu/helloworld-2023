export default class SubjectModel {
    id: string;
    abbreviation: string;
    name: string;
    constructor(id: string, abbreviation: string, name: string) {
        this.id = id;
        this.abbreviation = abbreviation;
        this.name = name;
    }
    parse(data: any): SubjectModel {
        return new SubjectModel(data["Id"], data["Abbreviation"], data["Name"])
    }
}