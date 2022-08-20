import ResourceHighlight from "components/ResourceHighlight";
import Newsletter from "components/Newsletter";
import ResourceList from "components/ResourceList";
import Footer from "components/Footer";
import Layout from "components/Layout";
import { resources } from "api/data";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    fetch("http://localhost:3000/api/resources")
  })
  return (
    <Layout>
      <ResourceHighlight
        resources={resources} />
      <Newsletter />
      <ResourceList 
        resources={resources} />
      <Footer />
    </Layout>
  )
}


export default Home;