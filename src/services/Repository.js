import { localAPI } from "../axios";

export const Repository = {
  getLessonContent: (fileName) => localAPI.get(`https://api.github.com/repos/fowmind/wdh-lessons-test/contents/lessons/${fileName}`),
}
