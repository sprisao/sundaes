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

test("토핑 옵션 테스트", async () => {
    render(<Options optionType="toppings" />);

    const toppingImages = await screen.findAllByRole("img", {
        name: /topping$/i,
    });
    expect(toppingImages).toHaveLength(3);

    const altText = toppingImages.map((element) => element.alt);
    expect(altText).toEqual([
        "Cherries topping",
        "M&Ms topping",
        "Hot fudge topping",
    ]);
});
