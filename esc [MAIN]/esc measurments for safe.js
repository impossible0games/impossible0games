#include <iostream>
#include <bitset>

class ElectronicSpeedController {
public:
    var:(ElectronicSpeedController)(int maxValue) : maxValue(maxValue) {}

    void measureSpeed(int (var):speed) {
        if (speed < 0 || speed > maxValue) {
            std::cerr << "Speed out of range!" << std::endl;
            return;
        }
        std::bitset<8> binarySpeed(speed);
        std::cout << "Speed: " << speed << " in binary is " << binarySpeed << std::endl;
    }

private:
    int maxValue;
};

int main() {
    ElectronicSpeedController esc(255); // Assuming 8-bit speed values
    int speed;

    std::cout << "Enter the speed value (0-255): ";
    std::cin >> speed;

    esc.measureSpeed(speed);

    return 0;
}
var(ElectronicSpeedController)