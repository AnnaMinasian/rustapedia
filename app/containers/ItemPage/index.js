import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import Img from 'components/Img';
import P from 'components/P';
import MainItemInfo from 'components/Table/ItemMainInfo';
import ItemInfo from 'components/Table/InfoBox/ItemInfo';
import FoodInfo from 'components/Table/InfoBox/FoodInfo';
import WeaponInfo from 'components/Table/InfoBox/WeaponInfo';
import LootTable from 'components/Table/LootTable';
import CraftTable from 'components/Table/CraftTable';
import { makeSelectCurrentItem } from '../App/selectors';
import H1 from '../../components/H1';
import reducer from './reducer';
import saga from './saga';
import Wrapper from './Wrapper';
import ItemContainer from './ItemContainer';

import {
  lootStatusChange,
  craftStatusChange,
  experimentStatusChange,
  researchStatusChange,
  experimentationStatusChange,
} from './actions';
import {
  makeSelectLootStatus,
  makeSelectCraftStatus,
  makeSelectExperimentStatus,
  makeSelectResearchStatus,
  makeSelectExperimentationStatus,
} from './selectors';
import Button from './Button';

const key = 'item';

export function ItemPage({
  currentItem,
  onCurrentLootStatusChanged,
  onCurrentCraftStatusChanged,
  onCurrentExperimentStatusChanged,
  onCurrentResearchStatusChanged,
  onCurrentExperimentationStatusChanged,
  lootStatus,
  craftStatus,
  experimentStatus,
  researchStatus,
  experimentationStatus,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <ItemContainer>
      <Wrapper>
        <div>
          {currentItem.image !== null && (
            <div className="center">
              <Img alt={currentItem.name} src={currentItem.image.publicUrl} />
            </div>
          )}
          {currentItem.mainInfo !== null && (
            <MainItemInfo currentItem={currentItem.mainInfo} />
          )}
          {currentItem.itemInfo !== null && (
            <ItemInfo currentItem={currentItem.itemInfo} />
          )}
          {currentItem.foodInfo !== null && (
            <FoodInfo currentItem={currentItem.foodInfo} />
          )}
          {currentItem.weaponInfo !== null && (
            <WeaponInfo currentItem={currentItem.weaponInfo} />
          )}
        </div>
        <div>
          <H1>{currentItem.name}</H1>
          <P>{currentItem.text}</P>
          <P>
            {currentItem.additionalText !== null && currentItem.additionalText}
          </P>
        </div>
      </Wrapper>
      <Wrapper>
        {currentItem.lootInfo.length > 0 && (
          <Button
            type="button"
            onClick={() => onCurrentLootStatusChanged()}
            style={
              lootStatus
                ? { background: 'rgba(0, 0, 0, 0.1)' }
                : { background: 'rgba(0, 0, 0, 0.2)' }
            }
          >
            Loot
          </Button>
        )}
        {currentItem.loot.length > 0 && (
          <Button
            type="button"
            onClick={() => onCurrentLootStatusChanged()}
            style={
              lootStatus
                ? { background: 'rgba(0, 0, 0, 0.1)' }
                : { background: 'rgba(0, 0, 0, 0.2)' }
            }
          >
            Loot
          </Button>
        )}
        {currentItem.craftInfo !== null && (
          <Button
            type="button"
            onClick={() => onCurrentCraftStatusChanged()}
            style={
              craftStatus
                ? { background: 'rgba(0, 0, 0, 0.1)' }
                : { background: 'rgba(0, 0, 0, 0.2)' }
            }
          >
            Craft
          </Button>
        )}
        {currentItem.experimentation !== null && (
          <Button
            type="button"
            onClick={() => onCurrentExperimentationStatusChanged()}
            style={
              experimentationStatus
                ? { background: 'rgba(0, 0, 0, 0.1)' }
                : { background: 'rgba(0, 0, 0, 0.2)' }
            }
          >
            Experimentation
          </Button>
        )}
        {currentItem.experiment !== null && (
          <Button
            type="button"
            onClick={() => onCurrentExperimentStatusChanged()}
            style={
              experimentStatus
                ? { background: 'rgba(0, 0, 0, 0.1)' }
                : { background: 'rgba(0, 0, 0, 0.2)' }
            }
          >
            Experiment
          </Button>
        )}
        {currentItem.research !== null && (
          <Button
            type="button"
            onClick={() => onCurrentResearchStatusChanged()}
            style={
              researchStatus
                ? { background: 'rgba(0, 0, 0, 0.1)' }
                : { background: 'rgba(0, 0, 0, 0.2)' }
            }
          >
            Research
          </Button>
        )}
        {currentItem.repairInfo !== null > 0 && (
          <Button type="button">Repair</Button>
        )}
        {currentItem.recycleResult !== null > 0 && (
          <Button type="button">Recycle</Button>
        )}
        {currentItem.mods !== null && <Button type="button">Mods</Button>}
        {currentItem.damageInfo !== null > 0 && (
          <Button type="button">Damage</Button>
        )}
        {currentItem.ammoFor !== null && (
          <Button type="button">Ammo For</Button>
        )}
      </Wrapper>
      <Wrapper>
        {lootStatus && <LootTable currentItem={currentItem} />}
        {craftStatus && <CraftTable currentItem={currentItem} />}
      </Wrapper>
    </ItemContainer>
  );
}

ItemPage.propTypes = {
  currentItem: PropTypes.object,
  onCurrentLootStatusChanged: PropTypes.func,
  onCurrentCraftStatusChanged: PropTypes.func,
  onCurrentExperimentStatusChanged: PropTypes.func,
  onCurrentExperimentationStatusChanged: PropTypes.func,
  onCurrentResearchStatusChanged: PropTypes.func,
  lootStatus: PropTypes.bool,
  craftStatus: PropTypes.bool,
  experimentStatus: PropTypes.bool,
  experimentationStatus: PropTypes.bool,
  researchStatus: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  lootStatus: makeSelectLootStatus(),
  craftStatus: makeSelectCraftStatus(),
  researchStatus: makeSelectResearchStatus(),
  experimentStatus: makeSelectExperimentStatus(),
  experimentationStatus: makeSelectExperimentationStatus(),
  currentItem: makeSelectCurrentItem(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onCurrentLootStatusChanged: lootStatus =>
      dispatch(lootStatusChange(lootStatus)),
    onCurrentCraftStatusChanged: craftStatus =>
      dispatch(craftStatusChange(craftStatus)),
    onCurrentExperimentStatusChanged: experimentStatus =>
      dispatch(experimentStatusChange(experimentStatus)),
    onCurrentResearchStatusChanged: researchStatus =>
      dispatch(researchStatusChange(researchStatus)),
    onCurrentExperimentationStatusChanged: experimentationStatus =>
      dispatch(experimentationStatusChange(experimentationStatus)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ItemPage);
