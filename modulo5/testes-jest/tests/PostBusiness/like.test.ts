import { PostBusiness } from "../../src/business/PostBusiness"
import { PostDatabase } from "../../src/database/PostDatabase"
import { IAddLikeInputDTO } from "../../src/models/Post"
import { PostDatabaseMock } from "../mocks/PostDatabaseMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"


describe("Testando PostBusiness", () => {
    const postBusiness = new PostBusiness(
        new PostDatabaseMock() as unknown as PostDatabase,
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("getLikes bem sucedido", async ()=> {
        const input:IAddLikeInputDTO = {
            token:"token-mock",
            postId:"201"
        }

        const response = await postBusiness.addLike(input)

        expect(response.message).toEqual("Like realizado com sucesso")

    })
})