import { PostBusiness } from "../../src/business/PostBusiness"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { PostDatabaseMock } from "../mocks/PostDatabaseMock"
import { IDeletePostInputDTO } from "../../src/models/Post"
import { response } from "express"
import { PostDatabase } from "../../src/database/PostDatabase"
import { HashManagerMock } from "../mocks/services/HashManagerMock"

describe("Testando PostBusiness", () => {
    const postBussiness = new PostBusiness( 
        new PostDatabaseMock() as unknown as PostDatabase,
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("Post deletado", async () => {
            const input: IDeletePostInputDTO = {
                token: "token-astrodev",
                postId: "201"
            }

            const response = await postBussiness.deletePost(input)

            expect(response.message).toEqual("Post deletado com sucesso")
    })
})