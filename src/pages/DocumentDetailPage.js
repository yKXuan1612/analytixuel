import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getDocumentDetail} from "../apis/api";
import {toast} from "react-toastify";
import {toastConfig} from "../config/toastConfig";
import parse from "html-react-parser";
import Breadcrumbs from "../components/Breadcrumbs";

function DocumentDetailPage () {
  const params = useParams()
  const [document, setDocument] = useState(null)
    const navigate = useNavigate();

  useEffect(() => {
    getDocumentDetail(params.id).then((res) => {
      if (!res.success) return toast.error(res.message, toastConfig)
      setDocument(res.data)
    }).catch((err) => {
        if (err.response.status === 404) return navigate('/404')
    })
  },[])

  return (
      <div className="container m-auto h-auto py-5">
          <section className="h-auto py-2 px-5 md:px-0">
              <Breadcrumbs />
          </section>


          <section className='py-3 px-5 md:px-0'>
              <h1 className="text-4xl py-1 font-bold text-white"> {document?.name} </h1>
              {
                  document?.category?.map((category, index) => (
                      <span key={category.name} className='text-sm bg-[#5E54F3] bg-opacity-20 text-[#5E54F3] rounded-full px-2 py-1'>
                            {category.name}
                        </span>
                  ))
              }
          </section>

        <div className='outline bg-white no-tailwindcss-base p-8'>

          {
              document?.body && parse(document?.body)
          }
        </div>
      </div>
  )
}

export default DocumentDetailPage