import Layout from "../components/layout";
import ContentButtons from "../components/content-buttons";
import { useEffect, useState } from "react";
import { TrmRepository } from "../core/api/trm-repository";
import WelcomeInfo from "../components/welcome-info/welcome-info";

export default function Home() {
  const [trmValue, setTrmValue] = useState(0);

  useEffect(() => {
    const fetchTrm = async () => {
      const res = await TrmRepository.getTrmValue();
      setTrmValue(res[0].valor);
    };
    fetchTrm();
  });

  return (
    <Layout>
      <div>
        <WelcomeInfo trmValue={trmValue}></WelcomeInfo>
        <ContentButtons></ContentButtons>
      </div>
    </Layout>
  );
}
