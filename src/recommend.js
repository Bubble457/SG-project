function recommendLessons(mbti, lessonList) {
  return lessonList.filter(lesson => lesson.suitableFor.includes(mbti));
}
