import {UserContent} from "../../content/userPage/UserContent";
import {FooterContent} from "../../content/utilContent/FooterContent";
import {HeaderNav} from "../../content/utilContent/HeaderNav";

export const MyPage = () => {
    return (
        <>
            <HeaderNav headerMode={false} />
            <UserContent />
            <FooterContent />
        </>
    )
}