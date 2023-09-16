import Section from '@/model/section'
export default class Course {
    id: string;
    courseNumber: number;
    title: string;
    credits: number;
    description: string;
    sections: Array<Section>;
}