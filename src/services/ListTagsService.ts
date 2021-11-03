import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"
import { classToPlain } from "class-transformer"

class ListTagsService {
  async execute() {
    const tagsRepositories = getCustomRepository(TagsRepositories)

    let tags = await tagsRepositories.find() // traz todas as tags cadastradas

    return classToPlain(tags)
  }
}

export { ListTagsService }