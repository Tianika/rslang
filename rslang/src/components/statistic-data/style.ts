import styled from 'styled-components';

export const TableStatistic = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1000px) {
    width: 90%;
  }
`;
export const TableStatisticTitle = styled.h2`
  margin-bottom: 30px;
  font-size: 30px;
  font-weight: 100;
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;
export const TableStatisticHeader = styled.div`
  font-size: 25px;
  font-weight: 400;
  display: flex;
  justify-content: space-around;
  width: 70%;
  background: rgba(109, 195, 255, 0.5);
  padding: 15px;
  min-width: 300px;
  border-radius: 13px;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 5px;
    font-size: 18px;
  }
`;
export const TableAudioRow = styled.div`
  font-size: 25px;
  font-weight: 100;
  display: flex;
  width: 70%;
  padding: 15px;
  min-width: 300px;
  border-radius: 13px;
  justify-content: flex-start;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 5px;
    font-size: 18px;
  }
`;
export const TableSprintRow = styled.div`
  font-size: 25px;
  font-weight: 100;
  display: flex;
  width: 70%;
  padding: 15px;
  min-width: 300px;
  border-radius: 13px;
  justify-content: flex-start;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 5px;
    font-size: 18px;
  }
`;
export const TableTotalRow = styled.div`
  font-size: 25px;
  font-weight: 100;
  display: flex;
  width: 70%;
  padding: 15px;
  min-width: 300px;
  border-radius: 13px;
  justify-content: flex-start;
  background: rgba(245, 255, 99, 0.5);
  @media (max-width: 1000px) {
    width: 100%;
    padding: 5px;
    font-size: 18px;
  }
`;
export const Column1 = styled.div`
  width: 25%;
`;
export const Column2 = styled.div`
  width: 25%;
`;
export const Column3 = styled.div`
  width: 25%;
`;
export const Column4 = styled.div`
  width: 25%;
`;
export const ChartBlock = styled.div`
  width: 80%;
  border: none;
  border-collapse: collapse;
  margin: 100px auto;
  @media (max-width: 500px) {
    margin: 20px 0;
  }
`;

export const ChartTitle = styled.h2`
  margin-bottom: 30px;
  font-size: 30px;
  font-weight: 100;
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;
export const ChartContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;
