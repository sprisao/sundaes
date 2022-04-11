import { render, screen } from "@testing-library/react";
import Options from "../Options";

test("display image for each scoop option from sever", async () => {
    render(<Options optionType="scoops" />);
    // 이미지 ㅓ기
    const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
    expect(scoopImages).toHaveLength(2);

    // alt text 잘 들어가 있는지 확인
    const altText = scoopImages.map((element) => element.alt);
    expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});
