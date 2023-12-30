import Header from "../components/Header";
import Footer from "../components/Footer";
import ConsultationForm from "../components/ConsultationForm";

function MainLayout({ children }) {
  return (
    <div className="main-layout bg-black h-fit">
      <Header />
      {children}
        <div className="container m-auto h-auto text-white">
            <section className="h-auto pt-10">
                <ConsultationForm />
            </section>
            <section className="h-auto pt-10">
                <div className="md:grid flex-col flex grid-cols-12 gap-5 md:h-[400px]">
                    <div className='col-span-6'>
                        <iframe width="100%" height="400" src="https://www.youtube.com/embed/c3suauAz0zQ?si=Xmw-fMfhJXMtghpx&autoplay=0&controls=0"
                                title="YouTube video player" frameBorder="0"
                                style={{"pointerEvents": "none"}}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </div>

                    <div className='col-span-6 p-4 md:p-10 flex flex-col gap-2 md:gap-5 pt-2 md:pt-10'>
                        <p className='md:text-6xl text-3xl font-bold'> <span className='text-[#5E54F3]'>EX</span>pertise </p>
                        <p className='md:text-6xl text-3xl font-bold'> <span className='text-secondary'>EX</span>proration </p>
                        <p className='md:text-6xl text-3xl font-bold'> <span className='text-[#5E54F3]'>EX</span>cellence </p>
                    </div>
                </div>
            </section>
        </div>
      <Footer />
    </div>
  );
}

export default MainLayout;