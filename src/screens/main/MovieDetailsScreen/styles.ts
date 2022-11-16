import {StyleSheet} from 'react-native';
import {screen, spacing} from 'theme';

const styles = StyleSheet.create({
  image: {
    height: screen.height * 0.3,
    width: screen.width,
  },
  detailsContainer: {
    marginTop: -spacing.normal,
    borderTopRightRadius: spacing.normal,
    borderTopLeftRadius: spacing.normal,
    paddingHorizontal: spacing.xlarge,
    paddingTop: spacing.xlarge,
    flex: 1,
    backgroundColor: 'white',
  },
  spaceBetweenRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.normal,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: spacing.large,
  },
});

export default styles;
