export type Course = {
  id: number
  date: string
  slug: string
  title: string
  thumbnail: string
  description: string
}

export type Courses = Course[]

export type CourseData = {
  id?: number
  title: string
  courses: Course[]
  description: string
  subtitles: string[]
}

export type RequestCourseThumbnail = {
  data: {
    attributes: {
      url: string
      width: number
      height: number
    }
  }
}

export type RequestCourseSubtitles = {
  id: number
  title: string
}

export type RequestCourses = {
  id: number
  attributes: {
    date: string
    slug: string
    title: string
    description: string
    thumbnail: RequestCourseThumbnail
  }
}

export type RequestCourse = {
  id: number
  title: string
  description: string
  subtitles: RequestCourseSubtitles[]
  courses: {
    data: RequestCourses[]
  }
}
