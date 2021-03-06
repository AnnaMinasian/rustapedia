import React from 'react';
import PropTypes from 'prop-types';
import Table from 'components/Table/Table';
import StyledLink from 'components/StyledLink';
import Img from 'components/Img';
import blueprint from 'images/blueprint.png';
import removeSpace from 'utils/removeSpace';
const blueprintStyle = {
  background: `url(${blueprint})`,
  backgroundSize: 'cover',
};
const LootTable = ({ currentItem }) => (
  <Table>
    {currentItem.loot.length > 0 && (
      <tbody>
        <tr className="center">
          <th>Items</th>
          <th>Category</th>
          <th>Condition</th>
          <th>Amount</th>
          <th>Chance</th>
        </tr>
        {currentItem.loot.map(elems => (
          <tr key={elems.id}>
            <td className="tableCell">
              <StyledLink to={removeSpace(elems.itemToLoot.name)}>
                {elems.itemToLoot.image !== null && (
                  <Img
                    style={elems.isBlueprint ? blueprintStyle : null}
                    className="ingredients blueprintStyle"
                    alt={elems.itemToLoot.name}
                    src={elems.itemToLoot.image.publicUrl}
                  />
                )}
                <span>
                  {elems.isBlueprint
                    ? elems.itemToLoot.blueprint
                    : elems.itemToLoot.name}
                </span>
              </StyledLink>
            </td>
            <td className="tableCell center">
              {elems.itemToLoot.subCategory.name}
            </td>
            <td className="tableCell center">{elems.condition}</td>
            <td className="tableCell center">{elems.count}</td>
            <td className="tableCell center">{elems.chance}%</td>
          </tr>
        ))}
      </tbody>
    )}
    {currentItem.lootInfo.length > 0 && (
      <tbody>
        <tr className="center">
          <th>Container</th>
          <th>Condition</th>
          <th>Amount</th>
          <th>Chance</th>
        </tr>
        {currentItem.lootInfo.map(elems => (
          <tr key={elems.container.id}>
            <td className="tableCell">
              <StyledLink to={removeSpace(elems.container.name)}>
                {elems.container.image !== null && (
                  <Img
                    className="ingredients"
                    alt={elems.container.name}
                    src={elems.container.image.publicUrl}
                  />
                )}
                <span>{elems.container.name}</span>
              </StyledLink>
            </td>
            <td className="tableCell center">{elems.condition}</td>
            <td className="tableCell center">{elems.count}</td>
            <td className="tableCell center">{elems.chance}%</td>
          </tr>
        ))}
      </tbody>
    )}
  </Table>
);

LootTable.propTypes = {
  currentItem: PropTypes.object,
};

export default LootTable;
