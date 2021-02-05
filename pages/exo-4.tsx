/**
 * 4. Refac
 *
 * - My component can be simplified.
 * - I don't want to maintain all those rows.
 * - I don't want to maintain all those states.
 * - I want my refactored component to be heavily typed using TypeScript.
 */

/* corrigé */

import { FC, useState, MouseEventHandler } from "react";

interface IUser {
  name: string;
  code: string;
  order: number;
}

type Props = {
  onClick: MouseEventHandler;
  name: string;
  code: string;
  order: number;
};

const RowOfMyTable = ({ onClick, name, code, order }: Props) => (
  <tr>
    <td onClick={onClick}>{name}</td>
    <td>{code}</td>
    <td>{order}</td>
  </tr>
);

const Refac: FC = () => {
  const [memberInfos, setMemberInfos] = useState<IUser>({
    name: "",
    code: "",
    order: 0,
  });

  return (
    <div>
      <h1>My Refac</h1>
      <pre>
        You clicked on: {memberInfos.name || "—"} code:{" "}
        {memberInfos.code || "—"} order:{memberInfos.code}
        {memberInfos.order || "—"}
      </pre>
      <table>
        <thead>
          <tr>
            <th>member</th>
            <th>code</th>
            <th>order</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <RowOfMyTable
              onClick={() =>
                setMemberInfos({
                  name: member.name,
                  code: member.code,
                  order: member.order,
                })
              }
              name={member.name}
              code={member.code}
              order={member.order}
            />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2}>Number of members</td>
            <td>{members.length}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

const members = [
  {
    name: "Guillaume",
    code: "ABCD",
    order: 1,
  },
  {
    name: "Josian",
    code: "1234",
    order: 2,
  },
  {
    name: "Jules",
    code: "EFGH",
    order: 3,
  },
  {
    name: "Marvin",
    code: "IJKL",
    order: 4,
  },
  {
    name: "Valery",
    code: "5678",
    order: 5,
  },
  {
    name: "Fadi",
    code: "UVWX",
    order: 6,
  },
  {
    name: "Dan",
    code: "QRST",
    order: 7,
  },
  {
    name: "Nicolas",
    code: "91011",
    order: 8,
  },
  {
    name: "Emilie",
    code: "MNOP",
    order: 9,
  },
];

export default Refac;
