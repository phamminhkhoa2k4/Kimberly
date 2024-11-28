import Body from "@/components/Body";
import Breadcrumb from "@/components/Breadcrumb";
import NewsDetail from "@/components/NewsDetail";


const News = () => {
    return (
      <>
        <Body>
          <Breadcrumb
            breadcrumbs={[
              { title: "News", url: "/news" },
              { title: "Mặt Dây Chuyền Kim Cương", url: "/diamond-pendant" },
            ]}
            
          />
            <NewsDetail/>
        </Body>
      </>
    );
}


export default News;