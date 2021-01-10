from unittest import TestCase

class TestDatabase(TestCase):
    def setUp(self) -> None:
        self.output = Output()
        self.db = Database(self.output)

    def tearDown(self) -> None:
        # breaking down logic if necessary
        pass

    def test_feature(self):
        assert 2 + 2 = 5

    def test_other_feature(self):
        assert True is False
