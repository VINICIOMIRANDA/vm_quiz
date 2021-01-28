/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable func-names */
import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';

// const BackgroundImage = styled.div`
//     background-image: url(${db.bg});
//     flex: 1;
//    background-size: cover;
//     background-position: center;
// `;

export const QuizContainer = styled.div`
    width:100%;
    max-width:350px;
    padding-top:45px;
    margin: auto 10%;
    @media screen and (max-width:500px) {
      margin:auto;
      padding: 15px;
    }
  `;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');// State inicial do component

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>
          AluraQuiz -Modelo Base
        </title>
      </Head>
      <QuizContainer>
        <Widget>

          <Widget.Header>
            <h1>Night do terror</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault(); // impedir o compartamento padrão do submit

              router.push(`/quiz?name=${name}`);
              // eslint-disable-next-line no-console
              console.log('Fazendo um submite por meio do react');
            }}
            >
              <input
                onChange={function (infosDoEvento) {
                  // eslint-disable-next-line no-console
                  console.log(infosDoEvento.target.value);
                  //  name = infosDoEvento.target.value;
                  setName(infosDoEvento.target.value);
                }}
                placeholder="Diz ai seu nome"
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quiz da galera</h1>

            <p> Momentos macabros</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/VINICIOMIRANDA/vm_quiz" />
    </QuizBackground>
  );
}
