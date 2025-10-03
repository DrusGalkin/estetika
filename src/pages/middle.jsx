import MailBlock from "../widgets/main-block/main-block.jsx";
import EntryForm from "../widgets/entry-form/entry_form_block.jsx";
import GalleryBlock from "../widgets/gallery/gallery_block.jsx";
import SpecialistsBlock from "../widgets/specialists/specialists_block.jsx";
import Services from "../widgets/services/services.jsx";
import Locations from "../widgets/location/location.jsx";
import About from "../widgets/about/About.jsx";

export default function MiddlePage() {
    return (
        <div className='p-1'>
            <MailBlock/>
            <Services/>
            <EntryForm/>
            <SpecialistsBlock/>
            <About/>
            <GalleryBlock/>
            <Locations/>
        </div>
    )
}