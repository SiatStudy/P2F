import { SearchContent } from "../../content/dataPageContent/SearchContent";
import { FooterContent } from "../../content/utilContent/FooterContent";
import { HeaderNav } from "../../content/utilContent/HeaderNav";

export const SearchPage = () => {
    return (
        <>
            <HeaderNav headerMode={false} />
            <SearchContent />
            <FooterContent />
        </>
    )
}