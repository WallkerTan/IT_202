export {};

type Student = {
    readonly studentId: string;
    name: string;
    email: string;
    hasCompleted: boolean;
    finalScore?: number;
};

type Course = {
    courseId: string;
    title: string;
    instructor: string;
    students: Student[];
    isActive: boolean;
};

type CourseManager = {
    schoolName: string;
    year: number;
    courses: Course[];
};

function getCompletedStudents(course: Course): Student[] {
    return course.students.filter((s) => s.hasCompleted);
}

function calculateAverageScore(course: Course): number | null {
    const scores = course.students
        .filter((s) => s.finalScore !== undefined)
        .map((s) => s.finalScore!) as number[];
    if (scores.length === 0) return null;
    const sum = scores.reduce((a, b) => a + b, 0);
    return sum / scores.length;
}

function printCourseReport(manager: CourseManager): void {
    manager.courses.forEach((course, index) => {
        console.log(
            `${index + 1}.Khóa: ${course.title} (GV: ${course.instructor})`
        );
        console.log(`- Tổng học viên: ${course.students.length}`);
        console.log(
            `- Hoàn thành: ${getCompletedStudents(course).length} học viên`
        );
        const avg = calculateAverageScore(course);
        console.log(`- Trung bình điểm: ${avg !== null ? avg : "N/A"}`);
        console.log(`- Trạng thái: ${course.isActive ? "ĐANG MỞ" : "ĐÃ ĐÓNG"}`);
        console.log();
    });
}
const courseManager: CourseManager = {
    schoolName: "PTIT Academy",
    year: 2025,
    courses: [
        {
            courseId: "C101",
            title: "Lập trình C++ cơ bản",
            instructor: "Thầy Nam",
            isActive: true,
            students: [
                {
                    studentId: "S001",
                    name: "Nguyễn Văn A",
                    email: "a@gmail.com",
                    hasCompleted: true,
                    finalScore: 8.5,
                },
                {
                    studentId: "S002",
                    name: "Trần Thị B",
                    email: "b@gmail.com",
                    hasCompleted: false,
                },
                {
                    studentId: "S003",
                    name: "Lê Văn C",
                    email: "c@gmail.com",
                    hasCompleted: true,
                    finalScore: 9.2,
                },
            ],
        },
        {
            courseId: "C102",
            title: "JavaScript nâng cao",
            instructor: "Cô Hạnh",
            isActive: false,
            students: [
                {
                    studentId: "S004",
                    name: "Phạm Văn D",
                    email: "d@gmail.com",
                    hasCompleted: true,
                    finalScore: 7.0,
                },
                {
                    studentId: "S005",
                    name: "Đặng Thị E",
                    email: "e@gmail.com",
                    hasCompleted: true,
                    finalScore: 8.3,
                },
            ],
        },
    ],
};

printCourseReport(courseManager);
