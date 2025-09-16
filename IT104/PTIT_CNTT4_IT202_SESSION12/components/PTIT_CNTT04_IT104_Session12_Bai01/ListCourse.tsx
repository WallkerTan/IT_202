import React from "react";

const courses = ["HTML", "CSS", "JavaScript", "ReactJS"];

export default function ListCourse() {
  return (
    <section
      aria-labelledby="course-heading"
      style={{ maxWidth: 520, margin: "2rem auto", lineHeight: 1.6 }}
    >
      <h1
        id="course-heading"
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          textAlign: "center",
          marginBottom: "1rem",
        }}
      >
        Danh sách khóa học
      </h1>
      <ol style={{ fontSize: "1.25rem", paddingLeft: "2rem" }}>
        {courses.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ol>
    </section>
  );
}
