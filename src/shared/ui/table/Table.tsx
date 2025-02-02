import styles from './Table.module.css';

interface Props<Entity extends Record<string, any>> {
  columns: (keyof Entity & string)[];
  data: Entity[];
}

export const Table = <Entity extends Record<string, any>>({ columns, data }: Props<Entity>) => {
  return (
    <table className={styles.table}>
      <thead>
      <tr>
        {columns.map((column, index) => (
          <th key={index} className={styles.th}>
            {column}
          </th>
        ))}
      </tr>
      </thead>
      <tbody>
      {data.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {columns.map((column, colIndex) => (
            <td key={colIndex} className={styles.td}>
              {row[column]}
            </td>
          ))}
        </tr>
      ))}
      </tbody>
    </table>
  );
};