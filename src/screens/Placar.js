import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ButtonAdd from '../../components/buttons/ButonAdd';
import ButtonMinus from '../../components/buttons/ButonMinus';
import Trophy from '../../components/icon/Trophy';
import Team from '../../models/team';

export default function Placar({route}) {
  const { descriptionA, descriptionB } = route.params;

  const [teamA, setTeamA] = useState(new Team(descriptionA, 0, 0));
  const [teamB, setTeamB] = useState(new Team(descriptionB, 0, 0));  

  const MAX_SCORE_VOLLEYBALL = teamA.setsWinner + teamB.setsWinner === 5 ? 15 : 25;
  const DIFF_SCORE_TO_SET_POINT = 2;

  let trophiesTeamA = [];
  for (let i = 0; i < teamA.setsWinner; i++) {
    trophiesTeamA.push(<Trophy key={i} />);
  }

  let trophiesTeamB = [];
  for (let i = 0; i < teamB.setsWinner; i++) {
    trophiesTeamB.push(<Trophy key={i} />);
  }

  const incrementTeamA = () => {
    setTeamA({...teamA, score: teamA.score + 1})
    checkVictoryTemA();
  };

  const incrementTeamB = () => {
    setTeamB({...teamB, score: teamB.score + 1})
    checkVictoryTemB();
  };

  const decrementTeamA = () => {
    if (teamA.score > 0) {
      setTeamA({...teamA, score: teamA.score - 1})
    }
  };

  const decrementTeamB = () => {
    if (teamB.score > 0) {
      setTeamB({...teamB, score: teamB.score - 1})
    }
  };

  const resetGame = () => {
    setTeamA({...teamA, score: 0, setsWinner: 0})
    setTeamB({...teamB, score: 0, setsWinner: 0})
  }

  const checkVictoryTemA = () => {
    if (teamA.score + 1 >= MAX_SCORE_VOLLEYBALL && teamA.score - teamB.score >= DIFF_SCORE_TO_SET_POINT) {
      setTeamA({...teamA, setsWinner: teamA.setsWinner + 1, score: 0})
      setTeamB({...teamB, score: 0})
    }
  }

  const checkVictoryTemB = () => {
    if (teamB.score + 1 >= MAX_SCORE_VOLLEYBALL && teamB.score - teamA.score >= DIFF_SCORE_TO_SET_POINT) {
      setTeamB({...teamB, setsWinner: teamB.setsWinner + 1, score: 0})
      setTeamA({...teamA, score: 0})
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.side}>
          <Text style={styles.teamText}>{teamA.description}</Text>
          <Text style={styles.counterText}>{teamA.score}</Text>
          <View style={styles.iconContainer}>
            <ButtonAdd add={incrementTeamA}/>
            <ButtonMinus decrement={decrementTeamA}/>
          </View>
          <View style={styles.iconContainer}>
            {trophiesTeamA}
          </View>
        </View>
        <View style={styles.side}>
          <Text style={styles.teamText}>{teamB.description}</Text>
          <Text style={styles.counterText}>{teamB.score}</Text>
          <View style={styles.iconContainer}>
            <ButtonAdd add={incrementTeamB}/>
            <ButtonMinus decrement={decrementTeamB}/>
          </View>
          <View style={styles.iconContainer}>
            {trophiesTeamB}
          </View>
        </View>
      </View>
      <View style={styles.buttonResetContainer}>
        <TouchableOpacity style={styles.buttonReset} onPress={resetGame}>
            <Text style={styles.buttonResetText}>REINICIAR PARTIDA</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#FFFAFA',
  },
  row: {
    flexDirection: 'row',
  },
  side: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFAFA',
  },
  counterText: {
    fontSize: 120,
    fontWeight: 'bold',
  },
  teamText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
    paddingTop: 25
  },
  buttonReset: {
    height: 61,
    width: 275,
    backgroundColor: '#7798C3',
    borderRadius: 84,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonResetText: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Roboto',
    fontWeight: '800'
  },
  buttonResetContainer: {
    alignItems: 'center',
    paddingTop: 65
  }
});
